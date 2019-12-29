import {InjectionToken} from '@angular/core';
import {StoreConfig} from '@ngrx/store/src/store_module';
import * as fromReducer from '../../ngrx/reducers/user-account.reducer';
import * as fromActions from '../../ngrx/actions/user-account.actions';

export const DETAILS_STORAGE_KEYS = new InjectionToken<keyof fromReducer.UserAccountState[]>('DetailsStorageKeys');
export const DETAILS_LOCAL_STORAGE_KEY = new InjectionToken<string[]>('DetailsStorage');
export const DETAILS_CONFIG_TOKEN = new InjectionToken<StoreConfig<fromReducer.UserAccountState, fromActions.UserAccountActions>>('DetailsConfigToken');
