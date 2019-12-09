import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostTypeEnum } from 'src/app/core/enumerations/PostTypeEnum';
import { map } from 'rxjs/operators';
/* Ngrx */
import { select } from '@ngrx/store';
import * as fromPost from '../../../ngrx/selectors/post.selectors';
import * as postActions from './../../../ngrx/actions/post.actions';
let TimelineVideosComponent = class TimelineVideosComponent {
    constructor(store, modalService, editorConfigService) {
        this.store = store;
        this.modalService = modalService;
        this.editorConfigService = editorConfigService;
        this.commentCreate = {};
        this.commentField = 0;
        this.editorConfig = {};
    }
    ngOnInit() {
        this.editorConfig = this.editorConfigService.editorConfigForComment;
        this.videoPost$ = this.store.pipe(select(fromPost.getPosts));
        this.videoPost$ = this.videoPost$.pipe(map(videoPost => videoPost.filter(x => x.postType === PostTypeEnum.PostVideo)));
        this.errorMessage$ = this.store.pipe(select(fromPost.getError));
    }
    openModal(id, postId) {
        this.modalService.open(id);
        this.store.dispatch(new postActions.SetCurrentPost(postId));
        this.filledPost();
    }
    filledPost() {
        this.store.pipe(select(fromPost.getCurrentPost)).subscribe(selectPost => {
            this.selectedPost = selectPost;
        });
    }
    closeModal(id) {
        this.modalService.close(id);
        this.store.dispatch(new postActions.ClearCurrentPost());
    }
    getCommentField(postId) {
        this.commentField = postId;
    }
    closeCommentField() {
        this.commentField = 0;
    }
    saveComment(postId) {
        this.commentCreate.postId = postId;
        this.store.dispatch(new postActions.CreateComment(this.commentCreate));
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