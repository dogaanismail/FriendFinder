import * as fromRoot from '../state/app.state';
import * as fromUserAccount from '../reducers/user-account.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    posts: fromUserAccount.UserAccountState;
}

const getUserAccountFeatureState = createFeatureSelector<fromUserAccount.UserAccountState>('user-account');

export const getSignedUserDetail = createSelector(
    getUserAccountFeatureState,
    state => state.signedUserDetail
);