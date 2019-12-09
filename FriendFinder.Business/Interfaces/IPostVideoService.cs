using FriendFinder.Domain.Common;
using FriendFinder.Entities.Entities;

namespace FriendFinder.Business.Interfaces
{
    public interface IPostVideoService
    {
        /// <summary>
        /// Creates post videos for a post
        /// </summary>
        /// <param name="createVideoForPost"></param>
        /// <returns></returns>
        ResultModel Create(PostVideo createVideoForPost);
    }
}
