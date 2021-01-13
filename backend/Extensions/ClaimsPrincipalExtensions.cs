using System;
using System.Linq;
using System.Security.Claims;

namespace Project4.Extensions
{
    public static class ClaimsPrincipalExtensions
    {
        public static int GetUserId(this ClaimsPrincipal user)
        {
            var id = user.Claims
                .Where(c => c.Type == ClaimTypes.NameIdentifier)
                .Select(c => c.Value).FirstOrDefault();

            return string.IsNullOrWhiteSpace(id) ? 0 : Convert.ToInt32(id);
        }

        public static string GetUserName(this ClaimsPrincipal user)
        {
            return user.Claims
                 .Where(c => c.Type == ClaimTypes.Name)
                 .Select(c => c.Value).FirstOrDefault();
        }

        public static string GetSecurityStamp(this ClaimsPrincipal user)
        {
            return user.Claims
                 .Where(c => c.Type == "AspNet.Identity.SecurityStamp")
                 .Select(c => c.Value).FirstOrDefault();
        }
    }
}
