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
        [Authorize]
        public async Task<IActionResult> GetProfile()
        {
            var securityStamp = User.Claims
                .Where(c => c.Type == "AspNet.Identity.SecurityStamp")
                .Select(c => c.Value).FirstOrDefault();

            var username = User.Identity.Name;
            var query = db.Users.Where(user =>
                user.UserName == username &&
                user.Status == IdentityStatus.Active &&
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

                var user = await userManager.FindByNameAsync(uname);

                if (user != null)
                {
                    user.Email = body.Email;
                    user.FullName = body.FullName;
                    user.LastName = body.LastName;
                    user.FirstName = body.FirstName;
                    user.Description = body.Description;
                    user.Gender = body.Gender;
                    user.Birthdate = body.Birthdate;
                    user.PhoneNumber = body.Phone;
                    await userManager.UpdateAsync(user);
                    await userManager.UpdateNormalizedEmailAsync(user);

                    //await db.SaveChangesAsync();
                    return await GetProfile();
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
                user.UserCandidate.Verify = !user.UserCandidate.Verify;
            }
            return Ok(new {
                user,
                message = "Xác nhận hồ sơ thành công"
            });
        }
    }
}