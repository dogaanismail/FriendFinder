using System.Threading.Tasks;
using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace FriendFinder.Api.Controllers
{
    public class ImageController : BaseController
    {
        [HttpPost, Route("generate")]
        public async Task<IActionResult> Generate(
             [FromBody] ImagesPostRequest imagesPostRequest,
             [FromServices] IImageProcessorService imageProcessor)
             => Json(await imageProcessor.ProcessImagesAsync("http://friend-finder-server.azurewebsites.net/", imagesPostRequest));

        [HttpGet, Route("options")]
        public IActionResult GetOptions(
            [FromServices] IImageProcessorService imageProcessor)
            => Json(imageProcessor.GetImageOptions());
    }
}