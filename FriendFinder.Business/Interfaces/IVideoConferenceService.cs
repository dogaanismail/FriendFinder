using FriendFinder.Domain.Models.VideoConference;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FriendFinder.Business.Interfaces
{
    public interface IVideoConferenceService
    {
        /// <summary>
        /// Get Twilio identity options from appsettings.json.
        /// </summary>
        /// <param name="identity"></param>
        /// <returns></returns>
        string GetTwilioJwt(string identity);

        /// <summary>
        /// Returns all rooms of video conferences
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<RoomDetails>> GetAllRoomsAsync();

    }
}
