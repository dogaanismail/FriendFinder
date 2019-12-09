using System.Threading.Tasks;
using FriendFinder.Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FriendFinder.Api.Controllers
{
    public class VideoController : BaseController
    {
        #region Ctor
        private readonly IVideoConferenceService _videoService;

        public VideoController(IVideoConferenceService videoService)
            => _videoService = videoService;

        #endregion

        [HttpGet("token")]
        public IActionResult GetToken()
            => new JsonResult(new { token = _videoService.GetTwilioJwt(User.Identity.Name) });

        [HttpGet("rooms")]
        public async Task<IActionResult> GetRooms()
            => new JsonResult(await _videoService.GetAllRoomsAsync());
    }
}