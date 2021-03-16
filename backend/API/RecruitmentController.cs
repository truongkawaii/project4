using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project4.Api;
using Project4.Models;

namespace Project4.Controlers
{
    [Route("/api/recruitment")]
    public class RecruitmentController : BaseController
    {

        [HttpPost("feedback/{id}")]
        public async Task<IActionResult> FeedbackCandidate(int id, PostFeedBackType status)
        {
            var feedback = db.postFeedBacks.Find(id);
            feedback.PostFeedBackType = status;
            db.SaveChanges();
            return Ok(feedback);
        }

        [HttpPost("coins/add/{total}")]
        public async Task<IActionResult> AddCoins(double total, int userId)
        {

            var uid = userId != 0 ? userId : CurrentUserId;
            var recruiment = db.Recruitments.FirstOrDefault(item => item.UserId == userId);
            recruiment.Coins += total;
            db.SaveChanges();
            return Ok(recruiment);
        }

        [HttpPost("coins/remove/{total}")]
        public async Task<IActionResult> RemoveCoins(double total, int userId)
        {

            var uid = userId != 0 ? userId : CurrentUserId;
            var recruiment = db.Recruitments.FirstOrDefault(item => item.UserId == userId);
            recruiment.Coins -= total;
            db.SaveChanges();
            return Ok(recruiment);
        }
    }
}