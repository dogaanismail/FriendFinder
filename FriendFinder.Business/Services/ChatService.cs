using FriendFinder.Business.Interfaces;
using FriendFinder.Domain.Dto;
using FriendFinder.Entities.Entities;
using FriendFinder.Repository.Extensions;
using FriendFinder.Repository.Generic;
using FriendFinder.Repository.UnitOfWork;
using System.Collections.Generic;
using System.Linq;

namespace FriendFinder.Business.Services
{
    public class ChatService : IChatService
    {
        #region Ctor
        private readonly IRepository<Chat> _chatRepository;
        private readonly IRepository<ChatGroupUser> _chatGroupUserRepository;
        private readonly IRepository<ChatGroup> _chatGroup;
        private readonly IRepository<AppUser> _appUserRepository;
        private readonly IUnitOfWork _unitOfWork;

        public ChatService(IRepository<Chat> chatRepository,
            IRepository<AppUser> appUserRepository,
            IRepository<ChatGroupUser> chatGroupRepository,
            IRepository<ChatGroup> chatGroup,
            IUnitOfWork unitOfWork)
        {
            _chatRepository = chatRepository;
            _appUserRepository = appUserRepository;
            _unitOfWork = unitOfWork;
            _chatGroupUserRepository = chatGroupRepository;
            _chatGroup = chatGroup;
        }

        #endregion

        public IEnumerable<MessageDto> GetAllMessages()
        {
            IEnumerable<MessageDto> data = _chatRepository.Find(null, x => x.Include(u => u.Sender).
            Include(r => r.ChatGroup)).ToList().Select(x => new MessageDto
            {
                CreateDate = x.CreatedDate,
                IsRead = x.IsRead,
                SenderName = x.Sender.UserName,
                Text = x.Text,
                GroupName = x.ChatGroup.Name
            }).AsEnumerable();

            return data;
        }

        public MessageDto GetMessageById(int chatId)
        {
            var chat = _chatRepository.GetById(chatId,
                x => x.Include(y => y.Sender));

            MessageDto messageDto = new MessageDto
            {
                SenderName = chat.Sender.UserName,
                CreateDate = chat.CreatedDate,
                IsRead = chat.IsRead,
                Text = chat.Text
            };
            return messageDto;
        }

        public IEnumerable<MessageDto> GetMessagesByGroupName(string groupName)
        {
            var chatGroup = _chatGroup.Find(x => x.Name == groupName).FirstOrDefault();

            IEnumerable<MessageDto> data = _chatRepository.Find(x => x.ChatGroupId == chatGroup.Id,
                x => x.Include(u => u.Sender).ThenInclude(t => t.UserDetail)
            .Include(r => r.ChatGroup).ThenInclude(tt=>tt.CreatedUser)).ToList().Select(x => new MessageDto
            {
                Text = x.Text,
                CreateDate = x.CreatedDate,
                IsRead = x.IsRead,
                SenderName = x.Sender.UserName,
                SenderId = x.Sender.Id,
                ProfilePhotoUrl = x.Sender.UserDetail.ProfilePhotoPath,
                GroupName = x.ChatGroup.Name
            }).AsEnumerable();

            return data;
        }
    }
}
