import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostTypeEnum } from '../../../core/enumerations/PostTypeEnum';
import { map } from 'rxjs/operators';
/* Ngrx */
import { select } from '@ngrx/store';
import * as postActions from './../../../ngrx/actions/post.actions';
import * as fromPost from '../../../ngrx/selectors/post.selectors';
let TimelineImagesComponent = class TimelineImagesComponent {
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
        this.imagePost$ = this.store.pipe(select(fromPost.getPosts));
        this.imagePost$ = this.imagePost$.pipe(map(imagePost => imagePost.filter(x => x.postType === PostTypeEnum.PostImage)));
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
        console.log(postId);
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
TimelineImagesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-timeline-images',
        templateUrl: './timeline-images.component.html'
    })
], TimelineImagesComponent);
export { TimelineImagesComponent };
//# sourceMappingURL=timeline-images.component.js.map