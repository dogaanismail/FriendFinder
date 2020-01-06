using System.Threading.Tasks;
using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace FriendFinder.Api.Controllers
{
    public class ImageController : BaseController
    {
        [HttpPost("generate")]
        public async Task<IActionResult> Generate(
             [FromBody] ImagesPostRequest imagesPostRequest,
             [FromServices] IImageProcessorService imageProcessor)
             => Json(await imageProcessor.ProcessImagesAsync("http://friend-finder-server.azurewebsites.net/", imagesPostRequest));

        [HttpGet("options")]
        public IActionResult GetOptions(
            [FromServices] IImageProcessorService imageProcessor)
            => Json(imageProcessor.GetImageOptions());

        // 67231fd6-dac8-43af-8314-bd4c62858595
        [HttpGet("share")]
        public IActionResult ShareGif(string id,
            [FromServices] IImageRepositoryService imageRepository)
            => Json(imageRepository.GetGifUrl(id));
    }
}