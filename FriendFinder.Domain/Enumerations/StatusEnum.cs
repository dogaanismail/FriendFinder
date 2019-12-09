using System.ComponentModel.DataAnnotations;

namespace FriendFinder.Domain.Enumerations
{
    public enum StatusEnum
    {
        [Display(Name = "Active")]
        Active = 1,

        [Display(Name = "Pssive")]
        Passive = 2,

        [Display(Name = "Deleted")]
        Deleted = 99,
    }
}
