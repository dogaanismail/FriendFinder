import { InjectionToken } from '@angular/core';
import { StoreConfig } from '@ngrx/store/src/store_module';
import * as fromReducer from '../../ngrx/reducers/post.reducer';
import * as fromActions from '../../ngrx/actions/post.actions';

export const POSTS_STORAGE_KEYS = new InjectionToken<keyof fromReducer.PostState[]>('PostsStorageKeys');
export const POSTS_LOCAL_STORAGE_KEY = new InjectionToken<string[]>('PostsStorage');
export const POSTS_CONFIG_TOKEN = new InjectionToken<StoreConfig<fromReducer.PostState, fromActions.PostActions>>('PostsConfigToken');
