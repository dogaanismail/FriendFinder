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
            if (username != null)
            {
                var appUser = _userService.FindByUserName(username);
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
            return null;
        }

        public AppUser GetUserInformationByUsername(string username)
        {
            if (username != null)
            {
            }
            return null;
        }
    }
}
