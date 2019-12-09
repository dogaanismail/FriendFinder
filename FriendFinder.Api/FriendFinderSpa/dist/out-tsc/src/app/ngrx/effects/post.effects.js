import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Effect, ofType } from '@ngrx/effects';
import * as postActions from '../actions/post.actions';
let PostEffects = class PostEffects {
    constructor(postService, actions$) {
        this.postService = postService;
        this.actions$ = actions$;
        this.loadPosts$ = this.actions$.pipe(ofType(postActions.PostActionTypes.Load), mergeMap(action => this.postService.getPosts().pipe(map((posts) => (new postActions.LoadSuccess(posts.result))), catchError(err => of(new postActions.LoadFail(err))))));
        this.createPost$ = this.actions$.pipe(ofType(postActions.PostActionTypes.CreatePost), map(((action) => action.payload)), mergeMap((post) => this.postService.createPost(post).pipe(map((newPost) => (new postActions.CreatePostSuccess(newPost.result))), catchError(err => of(new postActions.CreatePostFail(err))))));
        this.createComment$ = this.actions$.pipe(ofType(postActions.PostActionTypes.CreateComment), map((action) => action.payload), mergeMap((comment) => this.postService.createComment(comment).pipe(map((newComment) => (new postActions.CreateCommentSuccess(newComment.result))), catchError(err => of(new postActions.CreateCommentFail(err))))));
    }
};
tslib_1.__decorate([
    Effect()
], PostEffects.prototype, "loadPosts$", void 0);
tslib_1.__decorate([
    Effect()
], PostEffects.prototype, "createPost$", void 0);
tslib_1.__decorate([
    Effect()
], PostEffects.prototype, "createComment$", void 0);
PostEffects = tslib_1.__decorate([
    Injectable()
], PostEffects);
export { PostEffects };
//# sourceMappingURL=post.effects.js.map