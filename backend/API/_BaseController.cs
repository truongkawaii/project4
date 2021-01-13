using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Project4.Data;
using Project4.Models;
using Project4.Extensions;

namespace Project4.Api
{
    public partial class BaseController : Controller
    {
        private ApplicationUser _currentUser = null;
        private int _currentUserId = 0;
        protected ApplicationDbContext db
        {
            get { return (ApplicationDbContext)HttpContext.RequestServices.GetService(typeof(ApplicationDbContext)); }
        }
        protected UserManager<ApplicationUser> userManager
        {
            get
            {
                return (UserManager<ApplicationUser>)HttpContext.RequestServices.GetService(
                    typeof(UserManager<ApplicationUser>));
            }
        }
        protected IWebHostEnvironment environment
        {
            get { return (IWebHostEnvironment)HttpContext.RequestServices.GetService(typeof(IWebHostEnvironment)); }
        }
        protected int CurrentUserId
        {
            get
            {
                if (_currentUserId == 0)
                {
                    _currentUserId = User.GetUserId();
                }

                return _currentUserId;
            }
        }

        protected async Task<ApplicationUser> GetCurrentUser()
        {
            return await db.Users
                .Include(u => u.Roles)
                .ThenInclude(u => u.Role)
                .Include(u => u.Claims)
                .FirstOrDefaultAsync(u => u.UserName == User.Identity.Name);
        }

        protected ApplicationUser CurrentUser
        {
            get
            {
                if (_currentUser == null)
                {
                    _currentUser = GetCurrentUser().Result;
                }

                return _currentUser;
            }
        }

        protected bool IsAdmin
        {
            get { return User.IsInRole("Admin"); }
        }
        
        protected void SkipModelValidate(string keyword)
        {
            if (ModelState != null)
            {
                foreach (var item in ModelState)
                {
                    if (item.Key.Contains(keyword))
                    {
                        ModelState.Remove(item.Key);
                    }
                }
            }
        }

        protected IActionResult ModelError(string error = null)
        {
            var list = ModelState.Values.SelectMany(v =>
                v.Errors.Select(e =>
                    !string.IsNullOrWhiteSpace(e.ErrorMessage)
                        ? e.ErrorMessage
                        : (e.Exception != null ? e.Exception.Message : "Unknow error")));

            return BadRequest(new
            {
                error = error ?? "Lỗi",
                message = string.Join("\n", list)
            });
        }

        protected IActionResult IdentityError(IdentityResult result, string error = null)
        {
            var list = result.Errors.Select(e =>
            {
                if (e.Description.Contains("Passwords must be"))
                {
                    return "Mật khẩu cần tối thiểu 6 ký tự.";
                }

                if (e.Description.Contains("Email") && e.Description.Contains("already taken"))
                {
                    return "Email đã được sử dụng.";
                }

                if (e.Description.Contains("User name") && e.Description.Contains("already taken"))
                {
                    return "Tên người dùng đã được sử dụng.";
                }

                if (e.Description.Contains("Incorrect password"))
                {
                    return "Mật khẩu không chính xác.";
                }

                if (e.Description.Contains("Invalid token"))
                {
                    return "Mã khôi phục không đúng hoặc hết hạn";
                }

                return e.Description;
            });

            return BadRequest(new
            {
                error = error ?? "Lỗi",
                message = string.Join("\n", list)
            });
        }

        protected IActionResult Error(string message = null, string error = null)
        {
            return BadRequest(new
            {
                error = error ?? "Lỗi",
                message = message
            });
        }

        protected IActionResult Success(string message = null)
        {
            return Ok(new
            {
                success = true,
                message = message ?? "Thành công"
            });
        }
        protected string HomeUrl(string path = "")
        {
            return Request.GetHomeUrl(path);
        }
        protected string ApiUrl(string path = "")
        {
            return Request.GetHomeUrl("api/" + path);
        }

        protected object JsonDecode(string value)
        {
            return Newtonsoft.Json.JsonConvert.DeserializeObject(value);
        }

        protected TType JsonDecode<TType>(string value)
        {
            return Newtonsoft.Json.JsonConvert.DeserializeObject<TType>(value);
        }

        protected string JsonEncode(object value)
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(value);
        }
    }

    public class CustomExceptionFilterAttribute : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            var exception = context.Exception;
            context.HttpContext.Response.StatusCode = 400;
            context.Result = new JsonResult(GetException(context.Exception));
        }

        private object GetException(Exception ex)
        {
            if (ex == null) return null;

            return new
            {
                Exception = ex.GetType().Name,
                Message = ex.Message,
                HelpLink = ex.HelpLink,
                Data = ex.Data,
                Source = ex.Source,
                StackTrace = ex.StackTrace,
                Inner = GetException(ex.InnerException)
            };
        }
    }
}