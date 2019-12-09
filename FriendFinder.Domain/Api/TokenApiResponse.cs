namespace FriendFinder.Domain.Api
{
    public class TokenApiResponse
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public long Expires { get; set; }
    }
}
