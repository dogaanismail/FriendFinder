import { Injectable } from '@angular/core';

import { Observable, of, pipe } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { ChatService } from '../../services/chat/chat.service';
import { ChatGroupService } from '../../services/chat-group/chat-group.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as chatActions from '../actions/chat.actions';

@Injectable()
export class ChatEffects {
    constructor
        (
            private chatGroupService: ChatGroupService,
            private chatMessagesService: ChatService,
            private actions$: Actions
        ) { }

    @Effect()
    loadChatGroups$: Observable<Action> = this.actions$.pipe(
        ofType(chatActions.ChatActionTypes.LoadChatbox),
        mergeMap(action =>
            this.chatGroupService.getChatGroups().pipe(
                map((chatGroups: any) => (new chatActions.LoadChatboxSuccess(chatGroups.result))),
                catchError(err => of(new chatActions.LoadChatboxFail(err)))
            )
        )
    );

    @Effect()
    loadChatMessages$: Observable<Action> = this.actions$.pipe(
        ofType(chatActions.ChatActionTypes.LoadMessages),
        map(((action: chatActions.LoadMessages) => action.payload)),
        mergeMap(action =>
            this.chatMessagesService.getChatMessages(action).pipe(
                map((messages: any) => (new chatActions.LoadMessagesSuccess(messages.result))),
                catchError(err => of(new chatActions.LoadMessagesFail(err)))
            )
        )
    );

    @Effect()
    loadMemberDetails$: Observable<Action> = this.actions$.pipe(
        ofType(chatActions.ChatActionTypes.LoadMemberDetail),
        map(((action: chatActions.LoadMemberDetail) => action.payload)),
        mergeMap(action =>
            this.chatGroupService.getMemberDetails(action).pipe(
                map((memberDetails: any) => (new chatActions.LoadMemberDetailSuccess(memberDetails.result))),
                catchError(err => of(new chatActions.LoadMemberDetailFail(err)))
            )
        )
    );

  
    // @Effect()
    // createMessage$: Observable<Action> = this.actions$.pipe(
    //     ofType(chatActions.ChatActionTypes.CreateMessage),
    //     map((action: chatActions.CreateMessage) => action.payload),
    //     mergeMap((comment: any) =>
    //         this.chatMessagesService.sendMessage(comment).pipe(
    //             map((newComment: any) => (new postActions.CreateCommentSuccess(newComment.result))),
    //             catchError(err => of(new postActions.CreateCommentFail(err)))
    //         )
    //     )
    // );

      // @Effect()
    // createChatGroup$: Observable<Action> = this.actions$.pipe(
    //     ofType(chatActions.ChatActionTypes.CreateChatbox),
    //     map(((action: chatActions.CreateChatbox) => action.payload)),
    //     mergeMap((group: any) =>
    //         this.chatGroupService.createGroup(group).pipe(
    //             map((chatGroup: any) => (new chatActions.CreateChatboxSuccess(chatGroup.result))),
    //             catchError(err => of(new chatActions.CreateChatboxFail(err)))
    //         )
    //     )
    // );

}
