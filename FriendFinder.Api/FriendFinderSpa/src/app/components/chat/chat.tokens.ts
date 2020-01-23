import { InjectionToken } from '@angular/core';
import { StoreConfig } from '@ngrx/store/src/store_module';
import * as fromReducer from '../../ngrx/reducers/chat.reducer';
import * as fromActions from '../../ngrx/actions/chat.actions';

export const CHATS_STORAGE_KEYS = new InjectionToken<keyof fromReducer.ChatState[]>('ChatsStorageKeys');
export const CHATS_LOCAL_STORAGE_KEY = new InjectionToken<string[]>('ChatsStorage');
export const CHATS_CONFIG_TOKEN = new InjectionToken<StoreConfig<fromReducer.ChatState,
    fromActions.ChatActions>>('ChatsConfigToken');
