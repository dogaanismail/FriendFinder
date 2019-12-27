using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Common;
using FriendFinder.Entities.Entities;
using FriendFinder.Repository.Generic;
using FriendFinder.Repository.UnitOfWork;
using System;

namespace FriendFinder.Business.Services
{
    public class PostImageService : IPostImageService
    {
        #region Ctor
        private readonly IRepository<PostImage> _postImageRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PostImageService(IUnitOfWork unitOfWork,
            IRepository<PostImage> postImageRepository)
        {
            _postImageRepository = postImageRepository;
            _unitOfWork = unitOfWork;
        }

        #endregion

        public ResultModel Create(PostImage createImageForPost)
        {
            try
            {
                _postImageRepository.Create(createImageForPost);
                _unitOfWork.Commit();
                return new ResultModel { Status = true, Message = "Create Process Success ! " };
            }
            catch (Exception ex)
            {
                return new ResultModel { Status = false, Message = ex.ToString() };
            }
        }
    }
}
