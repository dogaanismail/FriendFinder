using FriendFinder.Domain.Models;
using System.Threading.Tasks;

namespace FriendFinder.Business.Interfaces
{
    public interface IImageProcessorService
    {
        Task<ImagesPostResponse> ProcessImagesAsync(string baseUrl, ImagesPostRequest request);

        ImageOptionsResponse GetImageOptions();
    }
}
