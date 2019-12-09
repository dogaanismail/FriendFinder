import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProfileComponent } from "./profile/profile.component";
import { ProfileActivityComponent } from "./profile-activity/profile-activity.component";
import { ProfileNavbarComponent } from "./profile-navbar/profile-navbar.component";
import { ProfileAlbumComponent } from "./profile-album/profile-album.component";
import { ProfileFriendsComponent } from "./profile-friends/profile-friends.component";
import { ProfileAboutComponent } from "./profile-about/profile-about.component";
import { ProfileCreatePostComponent } from "./profile-create-post/profile-create-post.component";
import { SharedModule } from "../../shared/shared.module";

const profileRoutes: Routes = [
  { path: "profile/:username", component: ProfileComponent },
  { path: "profile/about/:username", component: ProfileAboutComponent },
  { path: "profile/album/:username", component: ProfileAlbumComponent },
  { path: "profile/friends/:username", component: ProfileFriendsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes), SharedModule],
  declarations: [
    ProfileComponent,
    ProfileNavbarComponent,
    ProfileActivityComponent,
    ProfileAboutComponent,
    ProfileFriendsComponent,
    ProfileAlbumComponent,
    ProfileCreatePostComponent
  ]
})
export class ProfileModule { }
