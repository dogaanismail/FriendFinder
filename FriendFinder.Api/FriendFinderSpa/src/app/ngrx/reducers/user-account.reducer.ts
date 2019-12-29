import { SignedUserDetails } from '../../models/user/signedUserDetails';
import { UserAccountActions, UserAccountActionTypes } from '../actions/user-account.actions';
import * as fromRoot from '../state/app.state';

export interface State extends fromRoot.State {
    userDetails: UserAccountState;
}

export interface UserAccountState {
    userDetails: SignedUserDetails;
    error: any;
    loading: boolean;
}

export const initialState: UserAccountState = {
    userDetails: null,
    error: null,
    loading: false
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

        case UserAccountActionTypes.UpdateBasicInformations:
            return {
                ...state,
                error: null,
                loading: true
            };

        case UserAccountActionTypes.UpdateBasicInformationsSuccess:
            return {
                ...state,
                userDetails: action.payload,
                error: null,
                loading: false
            };

        case UserAccountActionTypes.UpdateBasicInformationsFail:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case UserAccountActionTypes.UpdatePassword:
            return {
                ...state,
                error: null,
                loading: true
            };

        case UserAccountActionTypes.UpdatePasswordSuccess:
            return {
                ...state,
                error: null,
                loading: false
            };

        case UserAccountActionTypes.UpdatePasswordFail:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
}
