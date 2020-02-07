import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/account/register/register.component';
import { LoginComponent } from './components/account/login/login.component';
import { TimelineComponent } from './components/timeline/timeline/timeline.component';
import { HomeComponent } from './components/video-conference/home/home.component';
import { CameraComponent } from './components/gif-maker/camera/camera.component';
import { ChatComponent } from './components/chat/chat/chat.component';
import { SettingsHomeComponent } from './components/settings/settings-home/settings-home.component';
import { ProfileComponent } from './components/profile/profile/profile.component';

const routes: Routes = [
  {
    path: '', component: TimelineComponent, pathMatch: 'full',
    loadChildren: () => import('./components/timeline/timeline.module').then(m => m.TimelineModule)
  },
  
  { path: "account/register", component: RegisterComponent },
  { path: "account/login", component: LoginComponent },
  {
    path: "video-conference/home", component: HomeComponent,
    loadChildren: () => import('./components/video-conference/video-conference.module').then(m => m.VideoConferenceModule)
  },
  {
    path: 'gif-maker/home', component: CameraComponent,
    loadChildren: () => import('./components/gif-maker/gif-maker.module').then(m => m.GifMakerModule)
  },
  {
    path: "chat", component: ChatComponent,
    loadChildren: () => import('./components/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: "settings/account", component: SettingsHomeComponent,
    loadChildren: () => import('./components/settings/setting.module').then(m => m.SettingsModule)
  },
  {
    path: "profile/:username", component: ProfileComponent,
    loadChildren: () => import('./components/profile/profile-module').then(m => m.ProfileModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
