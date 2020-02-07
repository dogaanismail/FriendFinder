import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/account/register/register.component';
import { LoginComponent } from './components/account/login/login.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';

import { AlertifyService } from './services/alertfiy/alertify.service';
import { EditorConfigService } from './core/configs/editor-configs/editor-config.service';
import { AuthGuard } from './core/helpers/auth.guard';
import { ErrorInterceptor } from './core/errorHandlings/error.interceptors';

/* NgRx */
import { StoreModule, META_REDUCERS, MetaReducer, State, USER_PROVIDED_META_REDUCERS } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './ngrx/effects/post.effects';
import { UserEffects } from './ngrx/effects/user.effects';
import { UserAccountEffects } from './ngrx/effects/user-account.effects';
import { ChatEffects } from './ngrx/effects/chat.effects';
import { reducers } from './ngrx/state/app.state';

/* Modules */
import { TimelineModule } from './components/timeline/timeline.module';
import { ProfileModule } from './components/profile/profile-module';
import { SettingsModule } from './components/settings/setting.module';
import { VideoConferenceModule } from './components/video-conference/video-conference.module';
import { ChatModule } from './components/chat/chat.module';
import { GifMakerModule } from './components/gif-maker/gif-maker.module';

/* Store Mechanism */
import { storageMetaReducer } from './core/store-infrastructure/storage-metareducer';
import { StoreLocalStorageService } from './core/store-infrastructure/store-local-storage.service';
import { ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY } from './app.tokens';
import { environment } from 'src/environments/environment';


// factory meta-reducer configuration function
export function getMetaReducers(saveKeys: string[], localStorageKey: string, storageService: StoreLocalStorageService): MetaReducer<State<any>>[] {
  return [storageMetaReducer(saveKeys, localStorageKey, storageService)];
}

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
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsModule,
    TimelineModule,
    ProfileModule,
    VideoConferenceModule,
    ChatModule,
    GifMakerModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(
      [PostEffects, UserEffects, UserAccountEffects, ChatEffects]
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    AlertifyService,
    EditorConfigService,
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}

    { provide: ROOT_STORAGE_KEYS, useValue: ['users'], multi: true },
    { provide: ROOT_LOCAL_STORAGE_KEY, useValue: '__app_storage__', multi: true },
    {
      provide: USER_PROVIDED_META_REDUCERS,
      deps: [ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY, StoreLocalStorageService],
      useFactory: getMetaReducers,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
