import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimelineFriendsComponent } from './timeline-friends/timeline-friends.component';
import { TimelineImagesComponent } from './timeline-images/timeline-images.component';
import { TimelineMessagesComponent } from './timeline-messages/timeline-messages.component';
import { TimelineVideosComponent } from './timeline-videos/timeline-videos.component';
import { TimelineNearbyComponent } from './timeline-nearby/timeline-nearby.component';
import { TimelineSidebarComponent } from './timeline-sidebar/timeline-sidebar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineCreatePostComponent } from './timeline-create-post/timeline-create-post.component';
import { TimelinePostListComponent } from './timeline/timeline-post-list.component';
import { SharedModule } from '../../shared/shared.module';
const timelineRoutes = [
    { path: "timeline/friends", component: TimelineFriendsComponent },
    { path: "timeline/images", component: TimelineImagesComponent },
    { path: "timeline/messages", component: TimelineMessagesComponent },
    { path: "timeline/videos", component: TimelineVideosComponent },
    { path: "timeline/nearby", component: TimelineNearbyComponent },
    { path: "timeline", component: TimelineComponent }
];
let TimelineModule = class TimelineModule {
};
TimelineModule = tslib_1.__decorate([
    NgModule({
        imports: [
            SharedModule,
            RouterModule.forChild(timelineRoutes)
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
        ]
    })
], TimelineModule);
export { TimelineModule };
//# sourceMappingURL=timeline.module.js.map