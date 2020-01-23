import { ChatGroup as ChatGroups } from '../../models/chat-group/chat-group';
import { MemberDetails } from '../../models/chat-group/member-details';
import { ChatMessages } from '../../models/chat/chat-messages';

import * as fromRoot from '../../ngrx/state/app.state';
import { ChatActions, ChatActionTypes } from '../actions/chat.actions';

export interface State extends fromRoot.State {
    chats: ChatState;
}

export interface ChatState {
    chatGroups: ChatGroups[];
    memberDetails: MemberDetails;
    chatMessages: ChatMessages[];
    loading: boolean;
    error: string;
}

const initialState: ChatState = {
    chatGroups: null,
    chatMessages: null,
    memberDetails: null,
    error: '',
    loading: false
};


export function chatReducer(state = initialState, action: ChatActions): ChatState {
    switch (action.type) {

        case ChatActionTypes.LoadChatbox:
            return {
                ...state,
                loading: true
            };

        case ChatActionTypes.LoadChatboxSuccess:
            return {
                ...state,
                chatGroups: action.payload,
                loading: false
            };

        case ChatActionTypes.LoadChatboxFail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case ChatActionTypes.LoadMessages:
            return {
                ...state,
                loading: true
            };

        case ChatActionTypes.LoadMessagesSuccess:
            return {
                ...state,
                chatMessages: action.payload,
                loading: false
            };

        case ChatActionTypes.LoadMessagesFail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };


        case ChatActionTypes.LoadMemberDetail:
            return {
                ...state,
                loading: true
            };

        case ChatActionTypes.LoadMemberDetailSuccess:
            return {
                ...state,
                memberDetails: action.payload,
                loading: false
            };

        case ChatActionTypes.LoadMemberDetailFail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case ChatActionTypes.CreateChatbox:
            return {
                ...state,
                loading: true
            };

        case ChatActionTypes.CreateChatboxSuccess:
            return {
                ...state,
                chatGroups: [...state.chatGroups, action.payload].sort((a, b) => <any>new Date(b.createdDate) - <any>new Date(a.createdDate)),
                error: '',
                loading: false
            };

        case ChatActionTypes.CreateChatboxFail:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case ChatActionTypes.CreateMessage:
            return {
                ...state,
                loading: true
            };

        case ChatActionTypes.CreateMessageSuccess:
            return {
                ...state,
                chatMessages: [...state.chatMessages, action.payload].sort((a, b) => <any>new Date(b.createdDate) - <any>new Date(a.createdDate)),
                error: '',
                loading: false
            };

        case ChatActionTypes.CreateMessageFail:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
}