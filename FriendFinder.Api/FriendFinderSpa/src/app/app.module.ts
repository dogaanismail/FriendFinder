import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/account/register/register.component';
import { LoginComponent } from './components/account/login/login.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';

import { AlertifyService } from './services/alertfiy/alertify.service';
import { EditorConfigService } from './config/editorConfig/editor-config.service';
import { AuthGuard } from './helpers/auth.guard';
import { ErrorInterceptor } from './core/errorHandlings/error.interceptors';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { postReducer } from './ngrx/reducers/post.reducer';
import { userReducer } from './ngrx/reducers/user.reducer';
import { globalErrorReducer } from './ngrx/reducers/global-error.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from 'src/app/ngrx/effects/post.effects';
import { UserEffects } from './ngrx/effects/user.effects';

/* Modules */
import { TimelineModule } from './components/timeline/timeline.module';
import { ProfileModule } from './components/profile/profile-module';
import { SettingsModule } from './components/settings/setting.module';
import { VideoConferenceModule } from './components/video-conference/video-conference.module';
import { ChatModule } from './components/chat/chat.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SettingsModule,
    TimelineModule,
    ProfileModule,
    VideoConferenceModule,
    ChatModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('posts', postReducer),
    StoreModule.forFeature('users', userReducer),
    StoreModule.forFeature('errors', globalErrorReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(
      [PostEffects, UserEffects]
    ),
  ],
  providers: [
    AlertifyService,
    EditorConfigService,
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
