import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostTypeEnum } from 'src/app/core/enumerations/PostTypeEnum';
import { map } from 'rxjs/operators';
/* Ngrx */
import { select } from '@ngrx/store';
import * as fromPost from '../../../ngrx/selectors/post.selectors';
import * as postActions from './../../../ngrx/actions/post.actions';
import * as fromUser from '../../../ngrx/selectors/user.selectors';
let TimelineVideosComponent = class TimelineVideosComponent {
    constructor(postStore, userStore, modalService, editorConfigService) {
        this.postStore = postStore;
        this.userStore = userStore;
        this.modalService = modalService;
        this.editorConfigService = editorConfigService;
        this.commentCreate = {};
        this.commentField = 0;
        this.editorConfig = {};
    }
    ngOnInit() {
        this.editorConfig = this.editorConfigService.editorConfigForComment;
        this.videoPost$ = this.postStore.pipe(select(fromPost.getPosts));
        this.videoPost$ = this.videoPost$.pipe(map(videoPost => videoPost.filter(x => x.postType === PostTypeEnum.PostVideo)));
        this.errorMessage$ = this.postStore.pipe(select(fromPost.getError));
        this.signedUser$ = this.userStore.pipe(select(fromUser.getSignedUser));
    }
    openModal(id, postId) {
        this.modalService.open(id);
        this.postStore.dispatch(new postActions.SetCurrentPost(postId));
        this.filledPost();
    }
    filledPost() {
        this.postStore.pipe(select(fromPost.getCurrentPost)).subscribe(selectPost => {
            this.selectedPost = selectPost;
        });
    }
    closeModal(id) {
        this.modalService.close(id);
        this.postStore.dispatch(new postActions.ClearCurrentPost());
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
};
TimelineVideosComponent = tslib_1.__decorate([
    Component({
        selector: 'app-timeline-videos',
        templateUrl: './timeline-videos.component.html'
    })
], TimelineVideosComponent);
export { TimelineVideosComponent };
//# sourceMappingURL=timeline-videos.component.js.map