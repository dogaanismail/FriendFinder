import { NgModule } from '@angular/core';

import { ChatComponent } from './chat/chat.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
import { ChatUserDetailComponent } from './chat-user-detail/chat-user-detail.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { SharedModule } from '../../shared/shared.module';
import { IconsModule } from '../../common/modules/icon.module';


import { storageMetaReducer } from '../../core/store-infrastructure/storage-metareducer';
import * as fromReducer from '../../ngrx/reducers/chat.reducer';
import { StoreModule } from '@ngrx/store';
import { CHATS_CONFIG_TOKEN, CHATS_LOCAL_STORAGE_KEY, CHATS_STORAGE_KEYS } from './chat.tokens';
import { StoreLocalStorageService } from '../../core/store-infrastructure/store-local-storage.service';


export function getChatsConfig(saveKeys: string[], localStorageKey: string, storageService: StoreLocalStorageService) {
    return { metaReducers: [storageMetaReducer(saveKeys, localStorageKey, storageService)] };
}

@NgModule({
    imports: [
        SharedModule,
        IconsModule,
        StoreModule.forFeature('chats', fromReducer.chatReducer, CHATS_CONFIG_TOKEN)
    ],
    declarations: [
        ChatComponent,
        ChatHeaderComponent,
        ChatSidebarComponent,
        ChatUserDetailComponent,
        ChatMessagesComponent
    ],
    providers: [
        StoreLocalStorageService,
        { provide: CHATS_LOCAL_STORAGE_KEY, useValue: '__chats_storage__' },
        { provide: CHATS_STORAGE_KEYS, useValue: ['chats','viewMode'] },
        {
            provide: CHATS_CONFIG_TOKEN,
            deps: [CHATS_STORAGE_KEYS, CHATS_LOCAL_STORAGE_KEY, StoreLocalStorageService],
            useFactory: getChatsConfig
        },
    ]
})
export class ChatModule { }
