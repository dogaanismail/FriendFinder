using Centare.Extensions;
using FriendFinder.Business.Interfaces;
using FriendFinder.Business.Provider;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using System;
using System.IO;
using System.Threading.Tasks;

namespace FriendFinder.Business.Services
{
    public class ImageRepositoryService : IImageRepositoryService
    {
        #region Ctor
        private readonly IContainerProvider _containerProvider;
        private readonly IMemoryCache _cache;
        private readonly ILogger<ImageRepositoryService> _logger;

        public ImageRepositoryService(
            IContainerProvider containerProvider,
            IMemoryCache cache,
            ILogger<ImageRepositoryService> logger)
        {
            _containerProvider = containerProvider ?? throw new ArgumentNullException(nameof(containerProvider));
            _cache = cache ?? throw new ArgumentNullException(nameof(cache));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        #endregion

        public async Task<Uri> GetImageUriAsync(string id)
        {
            var cachedUri = await _cache.GetOrCreateAsync(id, async entry =>
            {
                try
                {
                    entry.SlidingExpiration = TimeSpan.FromHours(6);

                    var container = await _containerProvider.GetContainerAsync();
                    var reference = await container.GetBlobReferenceFromServerAsync(id);

                    return reference.Uri;
                }
                catch (Exception ex)
                {
                    ex.TryLogException(_logger);
                    // Worst case scenario, fallback to somewhat reasonable URI.
                    return null;
                }
            });

            return cachedUri;
        }

        public async Task UploadImageAsync(string id, string filePath)
        {
            var container = await _containerProvider.GetContainerAsync();
            var blob = container.GetBlockBlobReference(id);
            blob.Properties.ContentType = "image/gif";
            FileStream file = new FileStream(filePath, FileMode.Open);
            await blob.UploadFromStreamAsync(file);
        }
    }
}
