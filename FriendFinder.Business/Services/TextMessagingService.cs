using Centare.Extensions;
using FriendFinder.Business.Configuration;
using FriendFinder.Business.Interfaces;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;
using System;
using System.Threading.Tasks;
using Twilio;
using Twilio.Rest.Api.V2010.Account;

namespace FriendFinder.Business.Services
{
    public class TextMessagingService : ITextMessagingService
    {
        #region Ctor
        private readonly TwilioSmsSettings _options;
        private readonly ILogger<TextMessagingService> _logger;

        public TextMessagingService(
            IOptions<TwilioSmsSettings> twilioOptions,
            ILogger<TextMessagingService> logger)
        {
            _options = twilioOptions?.Value ?? throw new ArgumentNullException(nameof(twilioOptions));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));

            var accountId = _options.AccountIdKey;

            var authToken = _options.AuthTokenKey;

            TwilioClient.Init(accountId, authToken);
        }

        #endregion

        public void SendImage(string toPhoneNumber, Image<Rgba32> image)
            => Task.Run(() =>
            {
                // Fire and forget, we just send the text message and don't care about the results.
                try
                {
                    var message =
                        MessageResource.Create(
                            to: toPhoneNumber,
                            from: _options.FromPhoneNumber,
                            body: image.ToString());

                    _logger.LogInformation($"Texted {toPhoneNumber}: {image}. Message: {message}.");
                }
                catch (Exception ex)
                {
                    ex.TryLogException(_logger);
                }
            });


        public void SendText(string toPhoneNumber, string body)
            => Task.Run(() =>
            {
                // Fire and forget, we just send the text message and don't care about the results.
                try
                {
                    var message =
                        MessageResource.Create(
                            to: toPhoneNumber,
                            from: _options.FromPhoneNumber,
                            body: body);

                    _logger.LogInformation($"Texted {toPhoneNumber}: {body}. Message: {message}.");
                }
                catch (Exception ex)
                {
                    ex.TryLogException(_logger);
                }
            });
    }
}
