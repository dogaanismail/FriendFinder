using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Common;
using FriendFinder.Domain.Dto;
using FriendFinder.Entities.Entities;
using FriendFinder.Repository.Generic;
using FriendFinder.Repository.UnitOfWork;
using Microsoft.AspNetCore.Identity;
using System;

namespace FriendFinder.Business.Services
{
    public class UserDetailService : IUserDetailService
    {
        #region
        private readonly IRepository<AppUserDetail> _appUserDetailRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserService _userService;
        private readonly IPostService _postService;

        public UserDetailService(IUnitOfWork unitOfWork,
            IRepository<AppUserDetail> appUserDetailRepository, IUserService userService, IPostService postService)
        {
            _appUserDetailRepository = appUserDetailRepository;
            _unitOfWork = unitOfWork;
            _userService = userService;
            _postService = postService;
        }

        #endregion

        public ResultModel Create(AppUserDetail appUserDetail)
        {
            try
            {
                _appUserDetailRepository.Create(appUserDetail);
                _unitOfWork.Commit();
                return new ResultModel { Status = true, Message = "Create Process Success ! " };
            }
            catch (Exception ex)
            {
                return new ResultModel { Status = false, Message = ex.ToString() };
            }

        }

        public AppUserDetailDto GetUserDetailByUsername(string username)
        {
            if (!string.IsNullOrEmpty(username))
            {
                var appUser = _userService.FindByUserName(username);
                if (appUser != null)
                {
                    AppUserDetailDto postListDto = new AppUserDetailDto
                    {
                        Id = appUser.Id,
                        Username = appUser.UserName,
                        UserPosts = _postService.GetUserPostsWithDto(appUser.Id),
                        CoverPhotoUrl = appUser.UserDetail.CoverPhotoPath ?? null,
                        ProfilePhotoUrl = appUser.UserDetail.ProfilePhotoPath ?? null,
                        RegisteredDate = appUser.CreatedDate
                    };
                    return postListDto;
                }
                else
                {
                    return null;
                }
            }
            return null;
        }

        public AppUser GetUserInformationByUsername(string username)
        {
            if (!string.IsNullOrEmpty(username))
            {

            }
            return null;
        }

        public ResultModel Update(SignedUserDetailDto detailDto)
        {
            try
            {
                var userDetail = _userService.FindByUserName(detailDto.UserName);
                var detail = userDetail.UserDetail;

                detail.FirstName = detailDto.FirstName;
                detail.LastName = detailDto.LastName;
                detail.BirthDate = detailDto.BirthDate;
                detail.City = detailDto.City;
                detail.Country = detailDto.Country;
                detail.AboutMe = detailDto.AboutMe;
                detail.UniversityName = detailDto.UniversityName;
                detail.UniStartDate = detailDto.StartDate;
                detail.UniFinishUpDate = detailDto.FinishUpDate;
                detail.HasGraduated = detailDto.HasGraduated;
                detail.UniversityDesc = detailDto.UniversityDesc;
                detail.CompanyName = detailDto.CompanyName;
                detail.Designation = detailDto.Designation;
                detail.ModifiedDate = DateTime.Now;
                _appUserDetailRepository.Update(detail);
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
