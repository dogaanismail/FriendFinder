import * as fromRoot from '../state/app.state';
import * as fromPosts from '../reducers/post.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from 'src/app/models/post/post';

export interface State extends fromRoot.State {
  posts: fromPosts.PostState;
}

const getPostFeatureState = createFeatureSelector<fromPosts.PostState>('posts');

export const getShowPostId = createSelector(
  getPostFeatureState,
  state => state.showPostId
);

export const getCurrentPostId = createSelector(
  getPostFeatureState,
  state => state.currentPostId
);

export const getPosts = createSelector(
  getPostFeatureState,
  state => state.posts
);

export const getIsNewPost = createSelector(
  getPostFeatureState,
  state => state.isNewPost
);

export const getIsNewComment = createSelector(
  getPostFeatureState,
  state => state.isNewComment
);

export const getCurrentPost = createSelector(
  getPostFeatureState,
  getCurrentPostId,
  (state, currentPostId) => {
    if (currentPostId === 0) {
      return {
        Id: 0,
        text: "",
        createdByUserName: "",
        createdByUserPhoto: "",
        imageUrl: "",
        videoUrl: "",
        createdDate: null,
        postType: null,
        comments: null
      };
    } else {
      return currentPostId ? state.posts.find((p: any) => p.id == currentPostId) : null;
    }
  }
);

export const getError = createSelector(
  getPostFeatureState,
  state => state.error
);