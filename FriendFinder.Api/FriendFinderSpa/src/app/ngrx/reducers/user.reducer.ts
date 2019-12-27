import { User } from "../../models/user/user";
import { UserActions, UserActionTypes } from "../actions/user.actions";
import { SignedUser } from 'src/app/models/user/signedUser';

export interface UserState {
    currentUser: User;
    signedUser: SignedUser;
    currentUserName: string;
    error: any;
    isNewPhoto: boolean;
    isNewCover: boolean;
    token: object;
    registerResult: object;
    userLoginProgress: boolean;
    userRegisterProgress: boolean;
}

const initialState: UserState = {
    currentUser: null,
    signedUser: null,
    currentUserName: null,
    error: null,
    isNewPhoto: false,
    isNewCover: false,
    token: null,
    registerResult: null,
    userLoginProgress: false,
    userRegisterProgress: false
};

export function userReducer(state = initialState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.SetCurrentUserSuccess:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };

        case UserActionTypes.SetCurrentUserFail:
            return {
                ...state,
                currentUser: null,
                error: action.payload
            };

        case UserActionTypes.ChangeProfilePhotoSuccess:
            const updatedUser = state.currentUser;
            updatedUser.profilePhotoUrl = action.payload.toString();
            state.currentUser = updatedUser;

            const signedUser = state.signedUser;
            signedUser.profilePhotoUrl = action.payload.toString();
            state.signedUser = signedUser;

            return {
                ...state,
                currentUser: updatedUser,
                error: null,
                isNewPhoto: false
            };

        case UserActionTypes.ChangeProfilePhotoFail:
            return {
                ...state,
                currentUser: null,
                error: action.payload
            };

        case UserActionTypes.ChangeCoverPhotoSuccess:
            const updatedCover = state.currentUser;
            updatedCover.coverPhotoUrl = action.payload.toString();
            state.currentUser = updatedCover;

            const updatedCoverSigned = state.signedUser;
            updatedCoverSigned.coverPhotoUrl = action.payload.toString();
            state.signedUser = updatedCoverSigned;

            return {
                ...state,
                currentUser: updatedCover,
                error: null,
                isNewCover: false
            };

        case UserActionTypes.ChangeCoverPhotoFail:
            return {
                ...state,
                currentUser: null,
                error: action.payload
            };

        case UserActionTypes.ChangeCoverPhoto:
            return {
                ...state,
                isNewCover: true
            };

        case UserActionTypes.ChangeProfilePhoto:
            return {
                ...state,
                isNewPhoto: true
            };

        case UserActionTypes.Login:
            return {
                ...state,
                userLoginProgress: true
            };

        case UserActionTypes.LoginSuccess:
            return {
                ...state,
                signedUser: action.payload,
                userLoginProgress: false,
                error: null
            };

        case UserActionTypes.LoginFail:
            return {
                ...state,
                error: action.payload,
                userLoginProgress: false
            };

        case UserActionTypes.Register:
            return {
                ...state,
                userRegisterProgress: true
            };

        case UserActionTypes.RegisterSuccess:
            return {
                ...state,
                registerResult: action.payload,
                userRegisterProgress: false
            };

        case UserActionTypes.RegisterFail:
            return {
                ...state,
                error: action.payload,
                userRegisterProgress: false
            };

        case UserActionTypes.LogoutSuccess:
            return {
                ...state,
                signedUser: null
            };

        case UserActionTypes.LogoutFail:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}
