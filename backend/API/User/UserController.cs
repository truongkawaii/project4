using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project4.Api;
using Project4.Data;
using Project4.Models;
using Project4.RequestBody;

namespace Project4.Controlers
{
    [Route("/api/user")]
    public class UserController : BaseController
    {

        [HttpGet("profile")]
        public async Task<IActionResult> GetProfile()
        {
            var securityStamp = User.Claims
                .Where(c => c.Type == "AspNet.Identity.SecurityStamp")
                .Select(c => c.Value).FirstOrDefault();

            var username = User.Identity.Name;
            var query = db.Users
                .Include(x => x.Roles)
                .Where(user =>
                user.UserName == username &&
                user.SecurityStamp == securityStamp &&
                user.LockoutEnd == null);
            var info = await FormatAccount(query).FirstOrDefaultAsync();
            if (info == null)
            {
                return BadRequest(new
                {
                    error = "Tài khoản không tồn tại hoặc đã thay đổi mật khẩu"
                });
            }

            return Ok(info);
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] UserProfileBody body)
        {

            if (ModelState.IsValid)
            {
                var uname = User.Identity.Name;

                if (await db.Users.AnyAsync(u => u.UserName != uname && u.Email == body.Email))
                {
                    return Error("Email đã được sử dụng, vui lòng chọn một email khác");
                }

                var user = await db.Users.Include(item => item.UserCandidate)
                                         .Include(item => item.UserRecruitment)
                                         .FirstOrDefaultAsync(item => item.UserName == uname);

                if (user != null)
                {
                    // user.Email = body.Email;
                    // user.FullName = body.FullName;
                    // user.LastName = body.LastName;
                    // user.FirstName = body.FirstName;
                    // user.Description = body.Description;
                    // user.Gender = body.Gender;
                    // user.Birthdate = body.Birthdate;
                    // user.PhoneNumber = body.Phone;
                    // await userManager.UpdateAsync(user);
                    // await userManager.UpdateNormalizedEmailAsync(user);

                    // update password 
                    if (body.PasswordBody != null)
                    {
                        if (body.PasswordBody.NewPassword == body.PasswordBody.RePassword)
                        {
                            var result = await userManager.ChangePasswordAsync(CurrentUser, body.PasswordBody.Password, body.PasswordBody.NewPassword);

                            if (!result.Succeeded)
                            {
                                return IdentityError(result);
                            }
                        }
                    }

                    if (user.UserRecruitment != null)
                    {
                        user.UserRecruitment.CompanyName = body.CompanyName;
                        user.UserRecruitment.Position = body.Position;
                        user.UserRecruitment.WorkAddress = body.WorkAddress;
                        user.UserRecruitment.WorkingTypes = body.WorkingTypes;
                        user.UserRecruitment.RecruitmentType = body.RecruitmentType;
                        await db.SaveChangesAsync();
                    }

                    else if (user.UserCandidate != null)
                    {
                        user.UserCandidate.WorkAddress = body.WorkAddress;
                        user.UserCandidate.CV = body.CV;
                        user.UserCandidate.Skills = body.Skills;
                        await db.SaveChangesAsync();
                    }
                    var securityStamp = User.Claims
                                               .Where(c => c.Type == "AspNet.Identity.SecurityStamp")
                                               .Select(c => c.Value).FirstOrDefault();
                    var query = db.Users
                                          .Include(x => x.Roles)
                                          .Where(user =>
                                          user.UserName == uname &&
                                          user.SecurityStamp == securityStamp &&
                                          user.LockoutEnd == null);
                    var info = await FormatAccount(query).FirstOrDefaultAsync();

                    return Ok(info);
                }

                return Error("Tài khoản không tồn tại");
            }
            return ModelError();
        }

        [HttpPost("password")]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordBody body)
        {
            if (body.NewPassword == body.RePassword)
            {
                var result = await userManager.ChangePasswordAsync(CurrentUser, body.Password, body.NewPassword);

                if (result.Succeeded)
                {
                    return Success();
                }
                return IdentityError(result);
            }

            return BadRequest("Mật khẩu không chính xác");
        }

        [HttpPost("avatar")]
        public async Task<IActionResult> UpdateAvatar(int id, [FromBody] Attachment body)
        {
            id = CurrentUser.Id;

            var profile = await db.Users.FindAsync(id);

            if (profile != null)
            {
                if (!string.IsNullOrWhiteSpace(body.Url))
                {

                    profile.Avatar = body.Url;

                    await db.SaveChangesAsync();

                    return Success();
                }
                return Error("Đường dẫn không hợp lệ");
            }

            return Error("Tài khoản không tồn tại");
        }




        [HttpGet("{userId}/verify")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> VerifyUser(int userId)
        {
            var user = await db.Users.FindAsync(userId);
            if (user != null)
            {
                await db.Entry(user).Reference(c => c.UserCandidate).LoadAsync();
                user.UserCandidate.Verify = !user.UserCandidate.Verify;
                await db.SaveChangesAsync();

                var account = await FormatAccount(db.Users.Where(u => u.Id == user.Id)).FirstOrDefaultAsync();
                return Ok(new
                {
                    account,
                    message = "Xác nhận hồ sơ thành công"
                });

            }

            return BadRequest(new
            {
                message = "Tài khoản không tồn tại"
            });

        }


        [HttpPost("{userId}/upgrade/vip")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpgradeVipUser(int userId)
        {
            var user = await db.Users.FindAsync(userId);
            if (user != null)
            {
                await db.Entry(user).Reference(c => c.UserRecruitment).LoadAsync();
                user.UserRecruitment.RecruitmentType = RecruitmentType.Vip;
                await db.SaveChangesAsync();
                var account = await FormatAccount(db.Users.Where(u => u.Id == user.Id)).FirstOrDefaultAsync();
                return Ok(new
                {
                    account,
                    message = "nâng cấp tài khoản thành công"
                });

            }

            return BadRequest(new
            {
                message = "Tài khoản không tồn tại"
            });

        }

        [HttpDelete("{userId}/upgrade/vip")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UnUpgradeVipUser(int userId)
        {
            var user = await db.Users.FindAsync(userId);
            if (user != null)
            {
                await db.Entry(user).Reference(c => c.UserRecruitment).LoadAsync();
                user.UserRecruitment.RecruitmentType = RecruitmentType.Free;
                await db.SaveChangesAsync();
                var account = await FormatAccount(db.Users.Where(u => u.Id == user.Id)).FirstOrDefaultAsync();
                return Ok(new
                {
                    account,
                    message = "nâng cấp tài khoản thành công"
                });

            }

            return BadRequest(new
            {
                message = "Tài khoản không tồn tại"
            });

        }
    }
}