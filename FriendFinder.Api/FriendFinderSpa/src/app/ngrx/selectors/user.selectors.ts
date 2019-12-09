import * as fromRoot from '../state/app.state';
import * as fromUsers from '../reducers/user.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostTypeEnum } from '../../core/enumerations/PostTypeEnum';

export interface State extends fromRoot.State {
  posts: fromUsers.UserState;
}

const getUserFeatureState = createFeatureSelector<fromUsers.UserState>('users');

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export const getError = createSelector(
  getUserFeatureState,
  state => state.error
);

export const getIsNewPhoto = createSelector(
  getUserFeatureState,
  state => state.isNewPhoto
);

export const getIsNewCover = createSelector(
  getUserFeatureState,
  state => state.isNewCover
);

export const getUserAlbum = createSelector(
  getUserFeatureState,
  getCurrentUser,
  (state, postType: any) => {
    return postType ? state.currentUser.userPost.filter(x => x.postType === PostTypeEnum.PostImage) : null;
  }
);

export const getUserToken = createSelector(
  getUserFeatureState,
  state => state.token
);

export const getLoginProgress = createSelector(
  getUserFeatureState,
  state => state.userLoginProgress
);

export const getRegisterProgress = createSelector(
  getUserFeatureState,
  state => state.userRegisterProgress
);

export const getSignedUser = createSelector(
  getUserFeatureState,
  state => state.signedUser
);