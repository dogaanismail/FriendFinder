import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
/* NgRx */
import { select } from '@ngrx/store';
import * as fromPost from '../../../ngrx/selectors/post.selectors';
import * as fromUser from '../../../ngrx/selectors/user.selectors';
import * as postActions from '../../../ngrx/actions/post.actions';
let TimelineComponent = class TimelineComponent {
    constructor(postStore, userStore) {
        this.postStore = postStore;
        this.userStore = userStore;
        this.componentActive = true;
    }
    ngOnInit() {
        this.postStore.dispatch(new postActions.Load());
        this.posts$ = this.postStore.pipe(select(fromPost.getPosts));
        this.errorMessage$ = this.postStore.pipe(select(fromPost.getError));
        this.newPost$ = this.postStore.pipe(select(fromPost.getIsNewPost));
        this.newComment$ = this.postStore.pipe(select(fromPost.getIsNewComment));
        this.signedUser$ = this.userStore.pipe(select(fromUser.getSignedUser));
    }
};
TimelineComponent = tslib_1.__decorate([
    Component({
        selector: 'app-timeline',
        templateUrl: './timeline.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], TimelineComponent);
export { TimelineComponent };
//# sourceMappingURL=timeline.component.js.map