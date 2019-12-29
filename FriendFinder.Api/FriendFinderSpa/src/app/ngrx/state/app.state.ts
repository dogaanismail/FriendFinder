import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from '../../ngrx/reducers/user.reducer';

export interface State {
  users: fromUser.UserState;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUser.userReducer
};
