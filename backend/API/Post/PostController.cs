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
using System.Collections.Generic;

namespace Project4.Controlers
{
    [Route("/api/posts")]
    public class PostController : BaseController
    {
        [Route("new")]
        public async Task<IActionResult> GetNew(int page = 1, int pageSize = 25, string search = null)
        {

            var query = db.Posts.Where(item => item.PostType == PostType.News).AsQueryable();

            if (!string.IsNullOrWhiteSpace(search))
            {
                query = query.Where(item => EF.Functions.ILike(item.Title, search));
            }

            var posts = await query.Select(item => new
            {
                Id = item.Id,
                Thumbnail = item.Thumbnail,
                Title = item.Title,
                Description = item.Description,
                Author = item.User.FullName,
                PostType = item.PostType,
                User = item.User,
                CreatedAt = item.CreatedTime,
                UpdatedTime = item.UpdatedTime,
            })

                           .OrderByDescending(item => item.CreatedAt)
                           .Skip((page - 1) * pageSize)
                           .Take(pageSize)
                           .ToListAsync();

            return Ok(new
            {
                posts,
                total = query.Count()
            });
        }

        [Route("recruitment")]
        public async Task<IActionResult> GetPostRecruitment(int page = 1, int pageSize = 25, string search = null)
        {
            var query = db.Posts.Where(item => item.PostType == PostType.Recruitment).AsQueryable();

            if (!string.IsNullOrWhiteSpace(search))
            {
                query = query.Where(item => EF.Functions.ILike(item.Title, search));
            }

            var posts = await query.Select(item => new
            {
                Id = item.Id,
                Thumbnail = item.Thumbnail,
                Title = item.Title,
                Description = item.Description,
                Author = item.User.FullName,
                PostType = item.PostType,
                User = item.User,
                CreatedAt = item.CreatedTime,
                UpdatedTime = item.UpdatedTime,
                Skills = item.Skills,
                PostFeedBacks = item.PostFeedBacks.Select(item => new PostFeedBack
                {
                    Subject = item.Subject,
                    Content = item.Content,
                    CreatedTime = item.CreatedTime,
                    UpdatedTime = item.UpdatedTime,
                    PostFeedBackType = item.PostFeedBackType,
                    PostId = item.PostId,
                    Post = item.Post,
                    User = item.User,
                    Id = item.Id
                }).ToList()
            })

                           .OrderByDescending(item => item.CreatedAt)
                           .Skip((page - 1) * pageSize)
                           .Take(pageSize)
                           .ToListAsync();

            return Ok(new
            {
                posts,
                total = query.Count()
            });
        }


        [HttpPost]
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
                if (post.UserId == CurrentUser.Id)
                {
                    if (ModelState.IsValid)
                    {
                        post.Title = model.Title;
                        post.Description = model.Description;
                        post.Content = model.Content;
                        post.Thumbnail = model.Thumbnail;
                        post.UserId = CurrentUserId;
                        post.UpdatedTime = DateTime.Now;
                        await db.SaveChangesAsync();
                    }
                    return Ok(new
                    {
                        message = "Cập nhật bài viết thành công"
                    });
                }

            }


            return ModelError();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var post = await db.Posts.FindAsync(id);
            if (post != null)
            {
                if (post.UserId == CurrentUser.Id)
                {
                    db.Posts.Remove(post);
                    await db.SaveChangesAsync();
                    return Ok(new
                    {
                        message = "Xóa bài viết thành công"
                    });
                }
            }
            return Error("Bạn không thể xóa bài viết này");
        }
    }
}