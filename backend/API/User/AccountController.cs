using System;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Project4.Api;
using Project4.Data;
using Project4.Models;
using Project4.RequestBody;

namespace Project4.Controlers
{
    [Route("/api/users")]
    public class AccountConrtroller : BaseController
    {
        private readonly SignInManager<ApplicationUser> signInManager;
        private readonly RoleManager<Role> roleManager;
        private string defaultLocale;


        public AccountConrtroller(RoleManager<Role> roleManager,
            IConfiguration config,
            SignInManager<ApplicationUser> signInManager)
        {
            this.roleManager = roleManager;
            this.signInManager = signInManager;

            defaultLocale = config.GetValue<string>("DefaultLocale", "vi");

        }

        [Route("{id}")]
        public async Task<IActionResult> Details(int id)
        {

            var query = db.Users
                .Include(u => u.Roles)
                .ThenInclude(u => u.Role)
                .Where(u => u.Id == id).AsNoTracking();
            var user = await FormatUser(query).FirstOrDefaultAsync();
            if (user != null)
            {
                return Ok(user);
            }

            return Error("User not found");
        }

        [HttpGet]
        public async Task<IActionResult> GetList(int page = 1, int pagesize = 20, string search = "", IdentityStatus? status = null)
        {
            var admin = User.IsInRole("Admin");
            int uid = CurrentUserId;

            var query = db.Users
                .Include(c => c.Roles)
                .Where(item => item.UserName != "admin" && item.UserCandidate != null)
                .AsNoTracking();

            if (!string.IsNullOrWhiteSpace(search))
            {
                search = '%' + search + '%';
                query = query.Where(item =>
                    EF.Functions.ILike(item.FullName, search) ||
                    EF.Functions.ILike(item.UserName, search) ||
                    EF.Functions.ILike(item.Email, search) ||
                    EF.Functions.ILike(item.PhoneNumber, search));
            }
            if (status.HasValue)
            {
                query = query.Where(item => item.Status == status);
            }

            var total = await query.CountAsync();
            query = query.OrderBy(item => item.Status);
            query = query.Skip((page - 1) * pagesize).Take(pagesize);
            var list = await FormatAccount(query).ToListAsync();

            return Ok(new
            {
                items = list,
                total = total
            });
        }


        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Create([FromBody]
            UserBody user)
        {
            if (!ModelState.IsValid) return ModelError();

            if (!Regex.IsMatch(user.UserName, @"^[A-Za-z0-9_\-\.\@]+$"))
            {
                return Error("Tên đăng nhập không hợp lệ");
            }

            if (user.UserName == "admin")
            {
                return Error("Xin lỗi, bạn không thể sử dụng admin làm username");
            }


            var roles = await db.Roles.Where(item => user.RoleIds.Contains(item.Id)).Select(item => item.Name)
                                .ToListAsync();

            if (roles.Any(r => r == "Admin"))
            {
                return Error("Xin lỗi, bạn không thể hack hệ thống");
            }

            var appUser = new ApplicationUser
            {
                UserName = user.UserName,
                Email = user.Email,
                PhoneNumber = user.Phone,
                JoinDate = DateTime.Now,
                Status = IdentityStatus.Active,
                FullName = user.FullName,
                FirstName = user.Firstname,
                LastName = user.Lastname
            };

            var createResult = await userManager.CreateAsync(appUser, user.Password);
            if (!createResult.Succeeded)
            {
                return IdentityError(createResult);
            }

            if (user.RoleIds != null)
            {
                await userManager.AddToRolesAsync(appUser, roles);
            }

            return Ok(await FormatUser(db.Users.Where(item => item.Id == appUser.Id)).FirstOrDefaultAsync());
        }


        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]
            UserBody user)
        {
            if (!ModelState.IsValid) return ModelError();

            if (!Regex.IsMatch(user.UserName, @"^[A-Za-z0-9_\-\.\@]+$"))
            {
                return Error("Tên đăng nhập không hợp lệ");
            }

            if (user.UserName == "admin")
            {
                return Error("Xin lỗi, bạn không thể sử dụng admin làm username");
            }


            var roles = await db.Roles.Where(item => user.RoleIds.Contains(item.Id)).Select(item => item.Name)
                                .ToListAsync();

            if (roles.Any(r => r == "Admin"))
            {
                return Error("Xin lỗi, bạn không thể hack hệ thống");
            }

            var appUser = new ApplicationUser
            {
                UserName = user.UserName,
                Email = user.Email,
                PhoneNumber = user.Phone,
                JoinDate = DateTime.Now,
                Status = IdentityStatus.Active,
                FullName = user.FullName,
                FirstName = user.Firstname,
                LastName = user.Lastname
            };

            var createResult = await userManager.CreateAsync(appUser, user.Password);

            if (roles.Contains("Recruitment"))
            {
                var recruiment = new Recruitment
                {
                    CompanyName = user.CompanyName,
                    Position = user.Position,
                    WorkingTypes = user.WorkingTypes,
                    WorkAddress = user.WorkAddress,
                    UserId = appUser.Id

                };

                await db.Recruitments.AddAsync(recruiment);

            }
            else
            {
                var candidate = new Candidate
                {
                    WorkAddress = user.WorkAddress,
                    UserId = appUser.Id
           
                };

                await db.Candidates.AddAsync(candidate);
            }

            await db.SaveChangesAsync();

            if (!createResult.Succeeded)
            {
                return IdentityError(createResult);
            }

            if (user.RoleIds != null)
            {
                await userManager.AddToRolesAsync(appUser, roles);
            }

            return Ok(await FormatUser(db.Users.Where(item => item.Id == appUser.Id)).FirstOrDefaultAsync());
        }



    }
}