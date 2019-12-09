using System.ComponentModel.DataAnnotations;

namespace FriendFinder.Domain.Enumerations
{
    public enum PostTypeEnum
    {
        [Display(Name = "POSTIMAGE")]
        PostImage = 1,

        [Display(Name = "POSTVIDEO")]
        PostVideo = 2,

        [Display(Name = "POSTTEXT")]
        PostText = 3,
    }
}
