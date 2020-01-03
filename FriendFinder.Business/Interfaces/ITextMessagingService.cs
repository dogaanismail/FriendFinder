using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;

namespace FriendFinder.Business.Interfaces
{
    public interface ITextMessagingService
    {
        void SendText(string toPhoneNumber, string body);

        void SendImage(string toPhoneNumber, Image<Rgba32> image);
    }
}
