import { UserState } from '../../ngrx/reducers/user.reducer'
import { UserAccountState } from '../reducers/user-account.reducer';

export interface State {
  user: UserState;
  userDetail: UserAccountState
}
