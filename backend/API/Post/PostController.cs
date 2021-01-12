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
    [Route("/api/posts")]
    public class PostController : BaseController
    {
        public async Task<IActionResult> Index()
        {
            var posts = await db.Posts.OrderByDescending(item => item.Id)
                                .Select(item => new
                                {
                                    Id = item.Id,
                                    Thumbnail = item.Thumbnail,
                                    Title = item.Title,
                                    Description = item.Description,
                                    Author = item.User.FullName,
                                    CreatedAt = item.CreatedTime,
                                    UpdatedTime = item.UpdatedTime

                                }).ToListAsync();
            return View("Views/Admin/Post/Index.cshtml", posts);
        }

        [HttpPost("create")]
        public async Task<IActionResult> Create([FromForm] Post model)
        {


            if (ModelState.IsValid)
            {

                model.UserId = CurrentUserId;
                model.CreatedTime = DateTime.Now;
                await db.Posts.AddAsync(model);
                await db.SaveChangesAsync();

                return Ok(new
                {
                    item = model
                });
            }


            return View("Views/Admin/Post/Create.cshtml");

        }

        [HttpPost("{id}")]
        public async Task<IActionResult> Update([FromForm] Post model, int id)
        {

            var post = await db.Posts.FindAsync(id);
            if (post != null)
            {
                if (ModelState.IsValid)
                {
                    post.Title = model.Title;
                    post.Description = model.Description;
                    post.Content = model.Content;
                    post.Thumbnail = model.Thumbnail;
                    post.UserId = CurrentUserId;
                    post.CreatedTime = DateTime.Now;
                    await db.SaveChangesAsync();
                }

                return Ok(new
                {
                    item = post
                });
            }


            return BadRequest("Post not exist");
        }


    }
}