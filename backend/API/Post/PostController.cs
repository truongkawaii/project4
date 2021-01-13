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
                                    PostType = item.PostType,
                                    User = item.User,
                                    CreatedAt = item.CreatedTime,
                                    UpdatedTime = item.UpdatedTime

                                }).ToListAsync();
            return Ok(new
            {
                posts
            });
        }

        public async Task<IActionResult> Create([FromBody] Post model)
        {

            if (ModelState.IsValid)
            {
                model.UserId = CurrentUserId;
                model.CreatedTime = DateTime.Now;
                model.UpdatedTime = DateTime.Now;
                await db.Posts.AddAsync(model);
                await db.SaveChangesAsync();

                return Ok(new
                {
                    item = model
                });
            }

            return ModelError();

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromBody] Post model, int id)
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
                    post.PostType = model.PostType;
                    post.UserId = CurrentUserId;
                    post.UpdatedTime = DateTime.Now;
                    await db.SaveChangesAsync();
                }

                return Ok(new
                {
                    item = post
                });
            }


            return BadRequest("Post not exist");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromBody] Post model, int id)
        {
            return Ok();
        }
    }
}