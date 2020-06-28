using FluentValidation.AspNetCore;
using FriendFinder.Api.Configuration;
using FriendFinder.Business.Configuration;
using FriendFinder.Business.Interfaces;
using FriendFinder.Business.Services;
using FriendFinder.Core.Attributes;
using FriendFinder.Core.Middleware;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Net.Http.Headers;
using System.Linq;

namespace FriendFinder.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Cloudinary
            services.Configure<CloudinarySettings>(Configuration.GetSection("CloudinarySettings"));
            //DbContext
            services.AddMyDbContext(Configuration);
            //SeriLog
            services.AddSeriLog(Configuration);
            //Swagger
            services.AddMySwagger();
            //Auth
            services.AddMyAuth(Configuration);
            //Service
            services.AddMyServices();
            //Validation
            services.AddMyValidator();
            //SignalR
            services.AddSignalR();

            //Twilio-Video Conference
            services.Configure<TwilioVideoSettings>(Configuration.GetSection(nameof(TwilioVideoSettings)))
                    .AddTransient<IVideoConferenceService, VideoConferenceService>();

            //Configurations of gif settings
            services.Configure<ImageProcessingOptions>(Configuration.GetSection(nameof(ImageProcessingOptions)));
            services.Configure<ImageCaptureOptions>(Configuration.GetSection(nameof(ImageCaptureOptions)));
            services.Configure<ImageRepositoryOptions>(Configuration.GetSection(nameof(ImageRepositoryOptions)));
            services.Configure<TwilioSmsSettings>(Configuration.GetSection(nameof(TwilioSmsSettings)));

            services.AddResponseCompression(
                options => options.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(new[]
                                {
                                    "image/jpeg",
                                    "image/png",
                                    "image/gif"
                                }));

            //Angular
            services.AddSpaStaticFiles(configuration => { configuration.RootPath = "FriendFinderSpa/dist/"; });

            services.AddMvc(opt =>
            {
                opt.EnableEndpointRouting = false;
                opt.Filters.Add(typeof(ValidateModelAttribute));
            })
            .AddFluentValidation(fvc => fvc.RegisterValidatorsFromAssemblyContaining<Startup>());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseMiddleware<ErrorHandlingMiddleware>();

            app.UseAuthentication();

            app.UseHttpsRedirection()
              .UseResponseCompression()
              .UseStaticFiles(new StaticFileOptions
              {
                  // 6 hour cache
                  OnPrepareResponse =
                      _ => _.Context.Response.Headers[HeaderNames.CacheControl] = "public,max-age=21600"
              })
              .UseSpaStaticFiles();

            app.UseMySwagger();

            app.UseSignalRHubs();

            //app.UseHttpsRedirection();
            app.UseMvc()
            .UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "FriendFinderSpa";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
