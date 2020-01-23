import * as fromRoot from '../state/app.state';
import * as fromChats from '../reducers/chat.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    chats: fromChats.ChatState;
}

const getChatFeatureState = createFeatureSelector<fromChats.ChatState>('chats');

export const getChatGroups = createSelector(
    getChatFeatureState,
    state => state.chatGroups
);

export const getChatMessages = createSelector(
    getChatFeatureState,
    state => state.chatMessages
);

export const getMemberDetails = createSelector(
    getChatFeatureState,
    state => state.memberDetails
);

export const getError = createSelector(
    getChatFeatureState,
    state => state.error
);

export const getLoading = createSelector(
    getChatFeatureState,
    state => state.loading
);