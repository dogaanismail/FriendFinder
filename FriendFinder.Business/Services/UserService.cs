using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Common;
using FriendFinder.Domain.Dto;
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

        public SignedUserDetailDto GetSignedUserDetail(string username)
        {
            if (!string.IsNullOrEmpty(username))
            {
                SignedUserDetailDto data = _userRepository.Find(x => x.UserName == username, x => x.Include(y => y.UserDetail))
                    .Select(p => new SignedUserDetailDto
                    {
                        Id = p.Id,
                        FirstName = p.UserDetail.FirstName,
                        LastName = p.UserDetail.LastName,
                        Email = p.Email,
                        BirthDate = p.UserDetail.BirthDate,
                        AboutMe = p.UserDetail.AboutMe,
                        Sex = p.UserDetail.Sex,
                        City = p.UserDetail.City,
                        Country = p.UserDetail.Country,
                        CompanyName = p.UserDetail.CompanyName,
                        Designation = p.UserDetail.Designation,
                        UniversityName = p.UserDetail.UniversityName,
                        StartDate = p.UserDetail.UniStartDate,
                        FinishUpDate = p.UserDetail.UniFinishUpDate,
                        UniversityDesc = p.UserDetail.UniversityDesc,
                        HasGraduated = p.UserDetail.HasGraduated
                    }).FirstOrDefault();
                return data;
            }
            return null;
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
