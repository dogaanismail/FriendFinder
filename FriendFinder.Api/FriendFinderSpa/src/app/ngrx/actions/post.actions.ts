import { Action } from '@ngrx/store';
import { Post } from '../../models/post/post';

export enum PostActionTypes {
  TogglePost = '[Post] Toggle Post',
  SetCurrentPost = '[Post] Set Current Post',
  ClearCurrentPost = '[Post] Clear Current Post',
  InitializeCurrentPost = '[Post] Initialize Current Post',
  Load = '[Post] Load',
  LoadSuccess = '[Post] Load Success',
  LoadFail = '[Post] Load Fail',
  UpdatePost = '[Post] Update Post',
  UpdatePostSuccess = '[Post] Update Post Success',
  UpdatePostFail = '[Post] Update Post Fail',
  CreatePost = '[Post] Create Post',
  CreatePostSuccess = '[Post] Create Post Success',
  CreatePostFail = '[Post] Create Post Fail',
  DeletePost = '[Post] Delete Post',
  DeletePostSuccess = '[Post] Delete Post Success',
  DeletePostFail = '[Post] Delete Post Fail',
  CreateComment = '[Post] Create Comment',
  CreateCommentSuccess = '[Post] Create Comment Success',
  CreateCommentFail = '[Post] Create Comment Fail',
  CreateGif = '[Post] Create Gif',
  CreateGifSuccess = '[Post] Create Gif Success',
  CreateGifFail = '[Post] Create Gif Fail'
}

export class TogglePost implements Action {
  readonly type = PostActionTypes.TogglePost;

  constructor(public payload: boolean) { }
}

export class SetCurrentPost implements Action {
  readonly type = PostActionTypes.SetCurrentPost;

  constructor(public payload: number) { }
}

export class ClearCurrentPost implements Action {
  readonly type = PostActionTypes.ClearCurrentPost;
}

export class InitializeCurrentPost implements Action {
  readonly type = PostActionTypes.InitializeCurrentPost;
}

export class Load implements Action {
  readonly type = PostActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = PostActionTypes.LoadSuccess;

  constructor(public payload: Post[]) { }
}

export class LoadFail implements Action {
  readonly type = PostActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export class CreatePost implements Action {
  readonly type = PostActionTypes.CreatePost;

  constructor(public payload: any) { }
}

export class CreatePostSuccess implements Action {
  readonly type = PostActionTypes.CreatePostSuccess;

  constructor(public payload: Post) { }
}

export class CreatePostFail implements Action {
  readonly type = PostActionTypes.CreatePostFail;

  constructor(public payload: string) { }
}

export class CreateComment implements Action {
  readonly type = PostActionTypes.CreateComment;

  constructor(public payload: any) { }
}

export class CreateCommentSuccess implements Action {
  readonly type = PostActionTypes.CreateCommentSuccess;

  constructor(public payload: any) { }
}

export class CreateCommentFail implements Action {
  readonly type = PostActionTypes.CreateCommentFail;

  constructor(public payload: string) { }
}

export class CreateGif implements Action {
  readonly type = PostActionTypes.CreateGif;

  constructor(public payload: any) { }
}

export class CreateGifSuccess implements Action {
  readonly type = PostActionTypes.CreateGifSuccess;

  constructor(public payload: any) { }
}

export class CreateGifFail implements Action {
  readonly type = PostActionTypes.CreateGifFail;

  constructor(public payload: string) { }
}

export type PostActions = TogglePost
  | SetCurrentPost
  | ClearCurrentPost
  | InitializeCurrentPost
  | Load
  | LoadSuccess
  | LoadFail
  | CreatePost
  | CreatePostSuccess
  | CreatePostFail
  | CreateComment
  | CreateCommentSuccess
  | CreateCommentFail
  | CreateGif
  | CreateGifSuccess
  | CreateGifFail;
