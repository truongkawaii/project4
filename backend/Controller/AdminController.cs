using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project4.Data;
using Project4.Models;

namespace Project4.Controlers
{
    public class AdminController : ControllerBase
    {
        ApplicationDbContext ctx;
        UserManager<ApplicationUser> userManager;
        RoleManager<Role> roleManager;

        public AdminController(ApplicationDbContext ctx,
            UserManager<ApplicationUser> userManager, RoleManager<Role> roleManager)
        {
            this.ctx = ctx;
            this.userManager = userManager;
            this.roleManager = roleManager;
        }

        public async Task<IActionResult> Init()
        {
            if (!await ctx.Users.AnyAsync()) // CHECK EXIST
            {
                var roleAdmin = await roleManager.CreateAsync(new Role
                {
                    Name = "Admin"
                });

                var roleRecruitment = await roleManager.CreateAsync(new Role
                {
                    Name = "Recruitment"
                });
                
                var roleCandidate  = await roleManager.CreateAsync(new Role
                {
                    Name = "Candidate"
                });

                var admin = new ApplicationUser
                {
                    UserName = "admin",
                    Email = "admin@gmail.com",
                    FullName = "Administrator",
                };

                var recruitment = new ApplicationUser
                {
                    UserName = "recruitment",
                    Email = "recruitment@gmail.com",
                    FullName = "Recruitment",
                };

                var candidate = new ApplicationUser
                {
                    UserName = "Candidate",
                    Email = "candidate@gmail.com",
                    FullName = "Candidate",
                };

                var resultAdmin = await userManager.CreateAsync(admin, "123456");
                var resultRecruitment = await userManager.CreateAsync(recruitment, "123456");
                var resultCandidate = await userManager.CreateAsync(candidate, "123456");

                if (resultAdmin.Succeeded)
                {
                    await userManager.AddToRoleAsync(admin, "Admin");
                    await userManager.AddToRoleAsync(recruitment, "Recruitment");
                    await userManager.AddToRoleAsync(candidate, "Candidate");

                    return Content("INIT Account SEUCCESS");
                }
                return Content("Failure");
            }
            return Content("Exists");
        }

    }
}