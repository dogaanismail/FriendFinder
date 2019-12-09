using FriendFinder.Domain.Common;
using FriendFinder.Entities.Entities;
using System.Collections.Generic;

namespace FriendFinder.Business.Interfaces
{
    public interface IPostCommentService
    {
        /// <summary>
        /// Creates post comments for a post.
        /// </summary>
        /// <param name="createComment"></param>
        /// <returns></returns>
        ResultModel Create(PostComment createComment);

        /// <summary>
        /// Return post comment by comment id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        PostComment GetById(int id);

        /// <summary>
        /// Returns post comment list by post Id
        /// </summary>
        /// <param name="postId"></param>
        /// <returns></returns>
        List<PostComment> GetPostCommentsByPostId(int postId);
    }
}
