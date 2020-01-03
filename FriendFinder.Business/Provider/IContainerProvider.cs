using Microsoft.WindowsAzure.Storage.Blob;
using System.Threading.Tasks;

namespace FriendFinder.Business.Provider
{
    public interface IContainerProvider
    {
        Task<CloudBlobContainer> GetContainerAsync();
    }
}
