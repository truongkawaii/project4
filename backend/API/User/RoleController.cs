using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project4.Api;
using Project4.Data;
using Project4.Models;
using Project4.RequestBody;

namespace Project4.Controlers
{
    [Route("/api/roles")]
    public class RoleController : BaseController
    {
        [HttpGet]
        public async Task<IActionResult> GetRoles(string search = "")
        {
            var query = db.Roles.Where(item => item.Name != "Admin");

            if (string.IsNullOrEmpty(search))
            {
                query = query.Where(item => EF.Functions.ILike(item.Name, $"%{search}%"));
            }

            var list = await query.Select(item => new {
                 item.Id,
                 item.Name
            }).ToListAsync();

            return Ok(new
            {
                items = list,
                total = list.Count()
            });
        }

    }
}