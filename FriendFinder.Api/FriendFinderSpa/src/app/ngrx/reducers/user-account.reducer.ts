import { SignedUserDetails } from '../../models/user/signedUserDetails';
import { UserAccountActions, UserAccountActionTypes } from '../actions/user-account.actions';
import * as fromRoot from '../state/app.state';

export interface State extends fromRoot.State {
    userDetails: UserAccountState;
}

export interface UserAccountState {
    userDetails: SignedUserDetails;
    error: any;
}

export const initialState: UserAccountState = {
    userDetails: null,
    error: null
};


export function userAccountReducer(state = initialState, action: UserAccountActions): UserAccountState {
    switch (action.type) {
        case UserAccountActionTypes.GetSignedUserDetailSuccess:

            return {
                ...state,
                userDetails: action.payload,
                error: null
            };

        case UserAccountActionTypes.GetSignedUserDetailFail:
            return {
                ...state,
                userDetails: null,
                error: action.payload
            };
        default:
            return state;
    }
}
