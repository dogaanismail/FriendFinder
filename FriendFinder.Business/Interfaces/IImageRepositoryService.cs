using FriendFinder.Domain.Dto;
using System;
using System.Threading.Tasks;

namespace FriendFinder.Business.Interfaces
{
    public interface IImageRepositoryService
    {
        Task UploadImageAsync(string id, string filePath);

        Task<Uri> GetImageUriAsync(string id);

        ShareGifDto GetGifUrl(string id);
    }
}
