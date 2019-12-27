using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Common;
using FriendFinder.Entities.Entities;
using FriendFinder.Repository.Extensions;
using FriendFinder.Repository.Generic;
using FriendFinder.Repository.UnitOfWork;
using System;
using System.Collections.Generic;

namespace FriendFinder.Business.Services
{
    public class PostCommentService : IPostCommentService
    {
        #region Ctor
        private readonly IRepository<PostComment> _postCommentRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PostCommentService(IUnitOfWork unitOfWork,
            IRepository<PostComment> postCommentRepository)
        {
            _postCommentRepository = postCommentRepository;
            _unitOfWork = unitOfWork;
        }

        #endregion

        public ResultModel Create(PostComment createComment)
        {
            try
            {
                _postCommentRepository.Create(createComment);
                _unitOfWork.Commit();
                return new ResultModel { Status = true, Message = "Create Process Success ! " };
            }
            catch (Exception ex)
            {
                return new ResultModel { Status = false, Message = ex.ToString() };
            }
        }

        public PostComment GetById(int id)
        {
            return _postCommentRepository.GetById(id);
        }

        public List<PostComment> GetPostCommentsByPostId(int postId)
        {
            //TO DO, this has to return a list
            return _postCommentRepository.GetList(x => x.PostId == postId, x=>x.Include(t=>t.CreatedUser).ThenInclude(e=>e.UserDetail));
        }
    }
}
