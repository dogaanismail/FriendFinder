import { Action } from '@ngrx/store';

export enum ChatActionTypes {
    LoadChatbox = '[Chat] Load Chatbox',
    LoadChatboxSuccess = '[Chat] Load Chatbox Success',
    LoadChatboxFail = '[Chat] Load Chatbox Fail',
    LoadMessages = '[Chat] Load Messages',
    LoadMessagesSuccess = '[Chat] Load Messages Success',
    LoadMessagesFail = '[Chat] Load Messages Fail',
    LoadMemberDetail = '[Chat] Load MemberDetail',
    LoadMemberDetailSuccess = '[Chat] Load Member Detail Success',
    LoadMemberDetailFail = '[Chat] Load Member Detail Fail',
    CreateChatbox = '[Chat] Create Chatbox',
    CreateChatboxSuccess = '[Chat] Create Chatbox Success',
    CreateChatboxFail = '[Chat] Create Chatbox Fail',
    CreateMessage = '[Chat] Create Message',
    CreateMessageSuccess = '[Chat] Create Message Success',
    CreateMessageFail = '[Chat] Create Message Fail'
}

export class LoadChatbox implements Action {
    readonly type = ChatActionTypes.LoadChatbox;
}

export class LoadChatboxSuccess implements Action {
    readonly type = ChatActionTypes.LoadChatboxSuccess;

    constructor(public payload: any) { }
}

export class LoadChatboxFail implements Action {
    readonly type = ChatActionTypes.LoadChatboxFail;

    constructor(public payload: any) { }
}

export class LoadMessages implements Action {
    readonly type = ChatActionTypes.LoadMessages;

    constructor(public payload: string) { }
}

export class LoadMessagesSuccess implements Action {
    readonly type = ChatActionTypes.LoadMessagesSuccess;

    constructor(public payload: any) { }
}

export class LoadMessagesFail implements Action {
    readonly type = ChatActionTypes.LoadMessagesFail;

    constructor(public payload: any) { }
}

export class LoadMemberDetail implements Action {
    readonly type = ChatActionTypes.LoadMemberDetail;

    constructor(public payload: string) { }
}

export class LoadMemberDetailSuccess implements Action {
    readonly type = ChatActionTypes.LoadMemberDetailSuccess;

    constructor(public payload: any) { }
}

export class LoadMemberDetailFail implements Action {
    readonly type = ChatActionTypes.LoadMemberDetailFail;

    constructor(public payload: any) { }
}

export class CreateChatbox implements Action {
    readonly type = ChatActionTypes.CreateChatbox;

    constructor(public payload: any) { }
}

export class CreateChatboxSuccess implements Action {
    readonly type = ChatActionTypes.CreateChatboxSuccess;

    constructor(public payload: any) { }
}

export class CreateChatboxFail implements Action {
    readonly type = ChatActionTypes.CreateChatboxFail;

    constructor(public payload: any) { }
}

export class CreateMessage implements Action {
    readonly type = ChatActionTypes.CreateMessage;

    constructor(public payload: any) { }
}

export class CreateMessageSuccess implements Action {
    readonly type = ChatActionTypes.CreateMessageSuccess;

    constructor(public payload: any) { }
}

export class CreateMessageFail implements Action {
    readonly type = ChatActionTypes.CreateMessageFail;

    constructor(public payload: any) { }
}

export type ChatActions = LoadChatbox
    | LoadChatboxSuccess
    | LoadChatboxFail
    | LoadMessages
    | LoadMessagesSuccess
    | LoadMessagesFail
    | LoadMemberDetail
    | LoadMemberDetailSuccess
    | LoadMemberDetailFail
    | CreateChatbox
    | CreateChatboxSuccess
    | CreateChatboxFail
    | CreateMessage
    | CreateMessageSuccess
    | CreateMessageFail;