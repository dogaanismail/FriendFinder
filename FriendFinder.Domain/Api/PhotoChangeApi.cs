using Microsoft.AspNetCore.Http;

namespace FriendFinder.Domain.Api
{
    public class PhotoChangeApi
    {
        public IFormFile ProfilePhoto { get; set; }
        public IFormFile CoverPhoto { get; set; }
    }
}
