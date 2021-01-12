using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace Project4.Controllers
{
    public class TestController : Controller
    {
        public IActionResult Test()
        {
            return Ok("Khong can token van dang nhap dc");
        }

        [Authorize]
        public IActionResult Token()
        {
            return Ok("Co token moi xem duoc");
        }
    }
}