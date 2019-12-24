using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Common;
using FriendFinder.Domain.Dto;
using FriendFinder.Entities.Entities;
using FriendFinder.Repository.Extensions;
using FriendFinder.Repository.Generic;
using FriendFinder.Repository.UnitOfWork;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FriendFinder.Business.Services
{
    public class ChatGroupService : IChatGroupService
    {
        #region Ctor
        private readonly IRepository<Chat> _chatRepository;
        private readonly IRepository<ChatGroup> _chatGroupRepository;
        private readonly IRepository<ChatGroupUser> _chatGroupUserRepository;
        private readonly IRepository<AppUser> _appUserRepository;
        private readonly UserManager<AppUser> _userManager;
        private readonly IUnitOfWork _unitOfWork;

        public ChatGroupService(IRepository<Chat> chatRepository,
            IRepository<AppUser> appUserRepository,
            IRepository<ChatGroupUser> chatGroupUserRepository,
            IRepository<ChatGroup> chatGroupRepository,
            UserManager<AppUser> userManager,
            IUnitOfWork unitOfWork)
        {
            _chatRepository = chatRepository;
            _appUserRepository = appUserRepository;
            _unitOfWork = unitOfWork;
            _chatGroupUserRepository = chatGroupUserRepository;
            _chatGroupRepository = chatGroupRepository;
            _userManager = userManager;
        }

        #endregion

        public ResultModel CreateChatGroup()
        {
            throw new NotImplementedException();
        }


        public IEnumerable<ChatGroupDto> GetChatGroups(string username)
        {
            //needs to have code refactoring later
            var authUser = _userManager.FindByNameAsync(username).Result;
            if (authUser != null)
            {
                //getting chatgroups 
                var chatGroups = _chatGroupRepository.GetList(null, x => x.Include(y => y.ChatGroupMembers)
                .ThenInclude(t => t.GroupMember).ThenInclude(a => a.UserDetail))
                .Where(c => c.ChatGroupMembers.Any(ty => ty.GroupMember.Id == authUser.Id))
                .ToList();

                //needs to have code refactoring because of selecting single user of a chat group
                IEnumerable<ChatGroupDto> chatGroupsDto = chatGroups.Where(x => x.ChatGroupMembers.Any(t => t.GroupMember.Id != authUser.Id)).Select(p => new ChatGroupDto
                {
                    AppUserId = p.ChatGroupMembers.Where(x => x.GroupMember.Id != authUser.Id).FirstOrDefault().GroupMember.Id, //code refactoring
                    ChatGroupId = p.Id,
                    ChatGroupName = p.Name,
                    CreatedDate = p.CreatedDate,
                    UserName = p.ChatGroupMembers.Where(x=> x.GroupMember.Id != authUser.Id).FirstOrDefault().GroupMember.UserName, //code refactoring
                    ProfilePhotoUrl = p.ChatGroupMembers.Where(x => x.GroupMember.Id != authUser.Id).FirstOrDefault().GroupMember.UserDetail.ProfilePhotoPath //code refactoring
                });

                return chatGroupsDto;
            }
            return null;
        }
    }
}
