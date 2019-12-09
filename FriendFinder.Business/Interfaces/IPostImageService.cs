using FriendFinder.Domain.Common;
using FriendFinder.Entities.Entities;

namespace FriendFinder.Business.Interfaces
{
    public interface IPostImageService
    {
        /// <summary>
        /// Creates post images for a post
        /// </summary>
        /// <param name="createImageForPost"></param>
        /// <returns></returns>
        ResultModel Create(PostImage createImageForPost);
    }
}
