using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project4.Api;
using Project4.Models;

namespace Project4.Controlers
{
    [Route("/api/candidate")]
    public class CandidateController : BaseController
    {

        public async Task<IActionResult> Get(int page = 1, int pageSize = 25, string search = null)
        {

            var query = db.Users.Where(item => item.UserCandidate != null).AsQueryable();

            if (!string.IsNullOrWhiteSpace(search))
            {
                query = query.Where(item => EF.Functions.ILike(item.FullName, search));
            }

            var profiles = await query.Select(item => new
            {

            })

                           .Skip((page - 1) * pageSize)
                           .Take(pageSize)
                           .ToListAsync();

            return Ok(new
            {
                profiles,
                total = query.Count()
            });
        }

    }
}