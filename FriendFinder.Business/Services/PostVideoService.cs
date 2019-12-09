using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Common;
using FriendFinder.Entities.Entities;
using FriendFinder.Repository.Generic;
using FriendFinder.Repository.UnitOfWork;
using System;

namespace FriendFinder.Business.Services
{
    public class PostVideoService : IPostVideoService
    {
        private readonly IRepository<PostVideo> _postVideoRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PostVideoService(IUnitOfWork unitOfWork,
            IRepository<PostVideo> postVideoRepository)
        {
            _postVideoRepository = postVideoRepository;
            _unitOfWork = unitOfWork;
        }

        public ResultModel Create(PostVideo createVideoForPost)
        {
            try
            {
                _postVideoRepository.Create(createVideoForPost);
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
