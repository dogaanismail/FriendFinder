using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace FriendFinder.Entities.Entities
{
    public class BaseEntity : IEntity
    {
        public int Id { get; set; }

        [ForeignKey("CreatedUser")]  //By using CreatedUser integration, an owner of post,postComment,postLike that has been created, can be found easily thanks to it.
        public virtual int? CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }

        [ForeignKey("ModifiedUser")]  //ModifiedUser can be used in AdminUI.
        public int? ModifiedBy { get; set; }

        public DateTime? ModifiedDate { get; set; }
        public int? StatusId { get; set; } //This can be Enumerations.

        public BaseEntity()
        {
            CreatedDate = DateTime.Now;
        }

        public virtual AppUser CreatedUser { get; set; }
        public virtual AppUser ModifiedUser { get; set; }

    }
}
