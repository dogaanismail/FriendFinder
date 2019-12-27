import { SignedUserDetails } from '../../models/user/signedUserDetails';
import { UserAccountActions, UserAccountActionTypes } from '../actions/user-account-actions';

export interface UserAccountState {
    signedUserDetail: SignedUserDetails;
    error: any;
}

const initialState: UserAccountState = {
    signedUserDetail: null,
    error: null
};


export function userAccountReducer(state = initialState, action: UserAccountActions): UserAccountState {
    switch (action.type) {
        case UserAccountActionTypes.GetSignedUserDetailSuccess:
            return {
                ...state,
                signedUserDetail: action.payload,
                error: null
            };

            case UserAccountActionTypes.GetSignedUserDetailFail:
            return {
                ...state,
                signedUserDetail: null,
                error: action.payload
            };
    }
}
