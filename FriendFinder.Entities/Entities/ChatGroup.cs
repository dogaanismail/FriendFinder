using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FriendFinder.Entities.Entities
{
    public class ChatGroup : BaseEntity
    {
        public ChatGroup()
        {
            Chats = new HashSet<Chat>();
            ChatGroupMembers = new HashSet<ChatGroupUser>();
        }
        [MaxLength(40)]
        public string Name { get; set; }

        [MaxLength(100)]
        public string GroupFlag { get; set; }

        public virtual ICollection<Chat> Chats { get; set; }
        public virtual ICollection<ChatGroupUser> ChatGroupMembers { get; set; }
    }
}
