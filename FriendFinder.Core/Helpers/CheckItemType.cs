using FriendFinder.Domain.Api;

namespace FriendFinder.Core.Helpers
{
    public static class CheckItemType
    {
        public static bool HasItemImage(PostCreateApi model)
        {
            if (model.Photo != null && model.Photo.Length > 0) return true;
            return false;
        }

        public static bool HasItemVideo(PostCreateApi model)
        {
            if (model.Video != null && model.Video.Length > 0) return true;
            return false;
        }
    }
}
