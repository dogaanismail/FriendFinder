import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineFriendsComponent } from './timeline-friends/timeline-friends.component';
import { TimelineImagesComponent } from './timeline-images/timeline-images.component';
import { TimelineMessagesComponent } from './timeline-messages/timeline-messages.component';
import { TimelineVideosComponent } from './timeline-videos/timeline-videos.component';
import { TimelineNearbyComponent } from './timeline-nearby/timeline-nearby.component';
import { TimelineSidebarComponent } from './timeline-sidebar/timeline-sidebar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineCreatePostComponent } from './timeline-create-post/timeline-create-post.component';
import { TimelinePostListComponent } from './timeline/timeline-post-list.component';
import { TimelineFollowUserComponent } from './timeline-follow-user/timeline-follow-user.component';
import { TimelineChatOnlineComponent } from './timeline-chat-online/timeline-chat-online.component';
import { SharedModule } from '../../shared/shared.module';

import { storageMetaReducer } from '../../core/store-infrastructure/storage-metareducer';
import * as fromReducer from '../../ngrx/reducers/post.reducer';
import { StoreModule } from '@ngrx/store';
import { POSTS_CONFIG_TOKEN, POSTS_LOCAL_STORAGE_KEY, POSTS_STORAGE_KEYS } from './timeline.tokens';
import { StoreLocalStorageService } from '../../core/store-infrastructure/store-local-storage.service';

const timelineRoutes: Routes = [
    { path: "timeline/friends", component: TimelineFriendsComponent },
    { path: "timeline/images", component: TimelineImagesComponent },
    { path: "timeline/messages", component: TimelineMessagesComponent },
    { path: "timeline/videos", component: TimelineVideosComponent },
    { path: "timeline/nearby", component: TimelineNearbyComponent },
    { path: "timeline", component: TimelineComponent }
];

export function getPostsConfig(saveKeys: string[], localStorageKey: string, storageService: StoreLocalStorageService) {
    return { metaReducers: [storageMetaReducer(saveKeys, localStorageKey, storageService)] };
}

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(timelineRoutes),
        StoreModule.forFeature('posts', fromReducer.postReducer, POSTS_CONFIG_TOKEN)
    ],
    declarations: [
        TimelineFriendsComponent,
        TimelineImagesComponent,
        TimelineMessagesComponent,
        TimelineVideosComponent,
        TimelineNearbyComponent,
        TimelineSidebarComponent,
        TimelineComponent,
        TimelineCreatePostComponent,
        TimelinePostListComponent,
        TimelineChatOnlineComponent,
        TimelineFollowUserComponent
    ],
    providers: [
        StoreLocalStorageService,
        { provide: POSTS_LOCAL_STORAGE_KEY, useValue: '__posts_storage__' },
        { provide: POSTS_STORAGE_KEYS, useValue: ['posts', 'viewMode'] },
        {
            provide: POSTS_CONFIG_TOKEN,
            deps: [POSTS_STORAGE_KEYS, POSTS_LOCAL_STORAGE_KEY, StoreLocalStorageService],
            useFactory: getPostsConfig
        },
    ]
})
export class TimelineModule { }
