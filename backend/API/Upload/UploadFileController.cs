using Microsoft.AspNetCore.Mvc;
using Project4.Api;
using System;
using System.IO;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Project4.Controllers.API
{
    [Route("api/upload/{path}")]
    public class UploadController : BaseController
    {
        [HttpPost, DisableRequestSizeLimit]
        public IActionResult Upload(string path)
        {
            try
            {
                
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("Resources", path);
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                    var now = DateTime.Now.Ticks.ToString();
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var typeFile = fileName.Substring(fileName.LastIndexOf("."));
                    fileName =  fileName.Substring(0,fileName.Length - typeFile.Length) + now + typeFile;
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var url = Path.Combine(folderName, fileName).Replace("\\","/");
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    return Ok(new { url = HomeUrl() + "/" + url });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server errors {e}");
            }
        }
    }
}