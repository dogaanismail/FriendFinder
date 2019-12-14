import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as postActions from '../../../ngrx/actions/post.actions';
let TimelinePostListComponent = class TimelinePostListComponent {
    constructor(editorConfigService, postStore) {
        this.editorConfigService = editorConfigService;
        this.postStore = postStore;
        this.pageTitle = 'Posts';
        this.commentCreate = {};
        this.commentField = 0;
        this.editorConfig = {};
    }
    getCommentField(postId) {
        this.commentField = postId;
    }
    closeCommentField() {
        this.commentField = 0;
    }
    saveComment(postId) {
        this.commentCreate.postId = postId;
        this.postStore.dispatch(new postActions.CreateComment(this.commentCreate));
        this.commentField = 0;
        this.commentCreate = {};
    }
    ngOnInit() {
        this.editorConfig = this.editorConfigService.editorConfigForComment;
    }
};
tslib_1.__decorate([
    Input()
], TimelinePostListComponent.prototype, "errorMessage", void 0);
tslib_1.__decorate([
    Input()
], TimelinePostListComponent.prototype, "newPost", void 0);
tslib_1.__decorate([
    Input()
], TimelinePostListComponent.prototype, "newComment", void 0);
tslib_1.__decorate([
    Input()
], TimelinePostListComponent.prototype, "posts", void 0);
tslib_1.__decorate([
    Input()
], TimelinePostListComponent.prototype, "signedUser", void 0);
TimelinePostListComponent = tslib_1.__decorate([
    Component({
        selector: "app-timeline-post-list",
        templateUrl: "./timeline-post-list.component.html",
        animations: [
            trigger('EnterLeave', [
                state('flyIn', style({ transform: 'translateX(0)' })),
                transition(':enter', [
                    style({ transform: 'translateX(-75%)' }),
                    animate('0.5s 300ms ease-in')
                ]),
                transition(':leave', [
                    animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
                ])
            ])
        ]
    })
], TimelinePostListComponent);
export { TimelinePostListComponent };
//# sourceMappingURL=timeline-post-list.component.js.map