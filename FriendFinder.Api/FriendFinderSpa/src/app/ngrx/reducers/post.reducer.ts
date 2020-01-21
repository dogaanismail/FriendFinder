import { Post } from '../../models/post/post';

import * as fromRoot from '../../ngrx/state/app.state';
import { PostActions, PostActionTypes } from '../actions/post.actions';

export interface State extends fromRoot.State {
  posts: PostState;
}

export interface PostState {
  showPostId: boolean;
  currentPost: Post;
  currentPostId: number;
  posts: Post[];
  commentPost: Post;
  isNewPost: boolean;
  error: string;
  isNewComment: boolean;
}

const initialState: PostState = {
  showPostId: true,
  currentPost: null,
  currentPostId: null,
  posts: [],
  commentPost: null,
  isNewPost: false,
  error: '',
  isNewComment: false
};

export function postReducer(state = initialState, action: PostActions): PostState {
  switch (action.type) {

    case PostActionTypes.TogglePost:
      return {
        ...state,
        showPostId: action.payload
      };

    case PostActionTypes.SetCurrentPost:
      return {
        ...state,
        currentPostId: action.payload
      };

    case PostActionTypes.LoadSuccess:
      return {
        ...state,
        posts: action.payload,
        error: ''
      };

    case PostActionTypes.LoadFail:
      return {
        ...state,
        posts: [],
        error: action.payload
      };

    case PostActionTypes.ClearCurrentPost:
      return {
        ...state,
        currentPostId: null
      };

    case PostActionTypes.InitializeCurrentPost:
      return {
        ...state,
        currentPostId: 0
      };

    case PostActionTypes.CreatePost:
      return {
        ...state,
        isNewPost: true
      };

    case PostActionTypes.CreatePostSuccess:
      return {
        ...state,
        posts: [...state.posts, action.payload].sort((a, b) => <any>new Date(b.createdDate) - <any>new Date(a.createdDate)),
        error: '',
        isNewPost: false
      };

    case PostActionTypes.CreatePostFail:
      return {
        ...state,
        error: action.payload,
        isNewPost: false
      };

    case PostActionTypes.CreateComment:
      return {
        ...state,
        isNewComment: true
      };

    case PostActionTypes.CreateCommentSuccess:
      const post: Post = state.posts.filter((item: any) => item.id == action.payload.postId)[0];
      post.comments.push(action.payload);
      return {
        ...state,
        posts: [...state.posts, action.payload],
        error: '',
        isNewComment: false
      };

    case PostActionTypes.CreateCommentFail:
      return {
        ...state,
        error: action.payload,
        isNewComment: false
      };

    case PostActionTypes.CreateGif:
      return {
        ...state,
        isNewPost: true
      };

    case PostActionTypes.CreateGifSuccess:
      return {
        ...state,
        posts: [...state.posts, action.payload].sort((a, b) => <any>new Date(b.createdDate) - <any>new Date(a.createdDate)),
        error: '',
        isNewPost: false
      };

    case PostActionTypes.CreateGifFail:
      return {
        ...state,
        error: action.payload,
        isNewPost: false
      };

    default:
      return state;
  }
}
