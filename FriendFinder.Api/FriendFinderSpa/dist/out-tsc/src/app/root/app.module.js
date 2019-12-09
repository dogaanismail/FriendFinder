import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { FileUploadModule } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TimelineComponent } from '../timeline/timeline/timeline.component';
import { FooterComponent } from '../footer/footer.component';
import { ProfileComponent } from '../profile/profile/profile.component';
import { ProfileActivityComponent } from '../profile/profile-activity/profile-activity.component';
import { ProfileNavbarComponent } from '../profile/profile-navbar/profile-navbar.component';
import { ProfileAlbumComponent } from '../profile/profile-album/profile-album.component';
import { ProfileFriendsComponent } from '../profile/profile-friends/profile-friends.component';
import { ProfileAboutComponent } from '../profile/profile-about/profile-about.component';
import { SettingsAccountComponent } from '../settings/settings-account/settings-account.component';
import { SettingsEducationComponent } from '../settings/settings-education/settings-education.component';
import { SettingsInformationComponent } from '../settings/settings-information/settings-information.component';
import { SettingsInterestComponent } from '../settings/settings-interest/settings-interest.component';
import { SettingsPasswordComponent } from '../settings/settings-password/settings-password.component';
import { SettingsMenuComponent } from '../settings/settings-menu/settings-menu.component';
import { TimelineFriendsComponent } from '../timeline/timeline-friends/timeline-friends.component';
import { TimelineImagesComponent } from '../timeline/timeline-images/timeline-images.component';
import { TimelineMessagesComponent } from '../timeline/timeline-messages/timeline-messages.component';
import { TimelineVideosComponent } from '../timeline/timeline-videos/timeline-videos.component';
import { TimelineNearbyComponent } from '../timeline/timeline-nearby/timeline-nearby.component';
import { TimelineSidebarComponent } from '../timeline/timeline-sidebar/timeline-sidebar.component';
import { RegisterComponent } from '../account/register/register.component';
import { LoginComponent } from '../account/login/login.component';
import { CreatepostComponent } from '../crudComponents/createpost/createpost.component';
import { AlertifyService } from '../services/alertfiy/alertify.service';
import { EditorConfigService } from '../config/editorConfig/editor-config.service';
import { PostListComponent } from '../list/post/post-list/post-list.component';
const routes = [
    { path: "timeline", component: TimelineComponent },
    { path: "", redirectTo: "timeline", pathMatch: "full" },
    { path: "profile", component: ProfileComponent },
    { path: "profile/about", component: ProfileAboutComponent },
    { path: "profile/album", component: ProfileAlbumComponent },
    { path: "profile/friends", component: ProfileFriendsComponent },
    { path: "settings/information", component: SettingsInformationComponent },
    { path: "settings/account", component: SettingsAccountComponent },
    { path: "settings/education", component: SettingsEducationComponent },
    { path: "settings/interest", component: SettingsInterestComponent },
    { path: "settings/password", component: SettingsPasswordComponent },
    { path: "timeline/friends", component: TimelineFriendsComponent },
    { path: "timeline/images", component: TimelineImagesComponent },
    { path: "timeline/messages", component: TimelineMessagesComponent },
    { path: "timeline/videos", component: TimelineVideosComponent },
    { path: "timeline/nearby", component: TimelineNearbyComponent },
    { path: "account/register", component: RegisterComponent },
    { path: "account/login", component: LoginComponent }
];
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            NavbarComponent,
            TimelineComponent,
            FooterComponent,
            ProfileComponent,
            ProfileNavbarComponent,
            ProfileActivityComponent,
            ProfileAboutComponent,
            ProfileFriendsComponent,
            ProfileAlbumComponent,
            SettingsAccountComponent,
            SettingsEducationComponent,
            SettingsInformationComponent,
            SettingsInterestComponent,
            SettingsPasswordComponent,
            SettingsMenuComponent,
            TimelineFriendsComponent,
            TimelineImagesComponent,
            TimelineMessagesComponent,
            TimelineVideosComponent,
            TimelineNearbyComponent,
            TimelineSidebarComponent,
            PostListComponent,
            RegisterComponent,
            LoginComponent,
            CreatepostComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            RouterModule.forRoot(routes),
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            NgxEditorModule,
            FileUploadModule
        ],
        providers: [
            AlertifyService,
            EditorConfigService
        ],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map