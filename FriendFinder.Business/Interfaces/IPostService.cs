using FriendFinder.Domain.Common;
using FriendFinder.Domain.Dto;
using FriendFinder.Entities.Entities;
using System.Collections;
using System.Collections.Generic;

namespace FriendFinder.Business.Interfaces
{
    public interface IPostService
    {
        /// <summary>
        /// Creates a post
        /// </summary>
        /// <param name="createPost"></param>
        /// <returns></returns>
        ResultModel Create(Post createPost);

        /// <summary>
        /// Returns the post lists
        /// </summary>
        /// <returns></returns>
        IEnumerable<PostListDto> GetPostList();

        /// <summary>
        /// Returns a post by PostId
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Post GetById(int id);

        /// <summary>
        /// Returns a post as Dto by PostId
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        PostListDto GetByIdAsDto(int id);

        /// <summary>
        /// Returns posts of user by userId
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        IEnumerable<Post> GetUserPostsByUserId(int userId);

        /// <summary>
        /// Returns posts of user by userId with dto
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        IEnumerable<PostListDto> GetUserPostsWithDto(int userId);
    }
}
