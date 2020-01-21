import { Injectable } from '@angular/core';

import { Observable, of, pipe } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { PostService } from '../../services/post/post.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as postActions from '../actions/post.actions';

@Injectable()
export class PostEffects {
    constructor
        (
            private postService: PostService,
            private actions$: Actions
        ) { }

    @Effect()
    loadPosts$: Observable<Action> = this.actions$.pipe(
        ofType(postActions.PostActionTypes.Load),
        mergeMap(action =>
            this.postService.getPosts().pipe(
                map((posts: any) => (new postActions.LoadSuccess(posts.result))),
                catchError(err => of(new postActions.LoadFail(err)))
            )
        )
    );

    @Effect()
    createPost$: Observable<Action> = this.actions$.pipe(
        ofType(postActions.PostActionTypes.CreatePost),
        map(((action: postActions.CreatePost) => action.payload)),
        mergeMap((post: any) =>
            this.postService.createPost(post).pipe(
                map((newPost: any) => (new postActions.CreatePostSuccess(newPost.result))),
                catchError(err => of(new postActions.CreatePostFail(err)))
            )
        )
    );

    @Effect()
    createGif$: Observable<Action> = this.actions$.pipe(
        ofType(postActions.PostActionTypes.CreateGif),
        map(((action: postActions.CreateGif) => action.payload)),
        mergeMap((post: any) =>
            this.postService.createGif(post).pipe(
                map((newPost: any) => (new postActions.CreateGifSuccess(newPost.result))),
                catchError(err => of(new postActions.CreateGifFail(err)))
            )
        )
    );

    @Effect()
    createComment$: Observable<Action> = this.actions$.pipe(
        ofType(postActions.PostActionTypes.CreateComment),
        map((action: postActions.CreateComment) => action.payload),
        mergeMap((comment: any) =>
            this.postService.createComment(comment).pipe(
                map((newComment: any) => (new postActions.CreateCommentSuccess(newComment.result))),
                catchError(err => of(new postActions.CreateCommentFail(err)))
            )
        )
    );

}
