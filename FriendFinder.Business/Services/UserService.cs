using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Common;
using FriendFinder.Entities.Entities;
using FriendFinder.Repository.Extensions;
using FriendFinder.Repository.Generic;
using FriendFinder.Repository.UnitOfWork;
using System;
using System.Linq;

namespace FriendFinder.Business.Services
{
    public class UserService : IUserService
    {
        #region Ctor
        private readonly IRepository<AppUser> _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUnitOfWork unitOfWork,
            IRepository<AppUser> userRepository)
        {
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }
        #endregion

        public AppUser FindByUserName(string username)
        {
            return _userRepository.Find(x => x.UserName == username, x => x.Include(t => t.UserDetail)).FirstOrDefault();
        }

        public ResultModel Update(AppUser appUser)
        {
            try
            {
                _userRepository.Update(appUser);
                _unitOfWork.Commit();
                return new ResultModel { Status = true, Message = "Update Process Success ! " };
            }
            catch (Exception ex)
            {
                return new ResultModel { Status = false, Message = ex.ToString() };
                throw;
            }
        }
    }
}
