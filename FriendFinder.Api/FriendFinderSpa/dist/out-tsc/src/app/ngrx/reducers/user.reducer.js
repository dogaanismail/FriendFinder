import { UserActionTypes } from "../actions/user.actions";
const initialState = {
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
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case UserActionTypes.SetCurrentUserSuccess:
            return Object.assign({}, state, { currentUser: action.payload, error: null });
        case UserActionTypes.SetCurrentUserFail:
            return Object.assign({}, state, { currentUser: null, error: action.payload });
        case UserActionTypes.ChangeProfilePhotoSuccess:
            const updatedUser = state.currentUser;
            updatedUser.profilePhotoUrl = action.payload.toString();
            state.currentUser = updatedUser;
            const signedUser = state.signedUser;
            signedUser.profilePhotoUrl = action.payload.toString();
            state.signedUser = signedUser;
            return Object.assign({}, state, { currentUser: updatedUser, error: null, isNewPhoto: false });
        case UserActionTypes.ChangeProfilePhotoFail:
            return Object.assign({}, state, { currentUser: null, error: action.payload });
        case UserActionTypes.ChangeCoverPhotoSuccess:
            const updatedCover = state.currentUser;
            updatedCover.coverPhotoUrl = action.payload.toString();
            state.currentUser = updatedCover;
            const updatedCoverSigned = state.signedUser;
            updatedCoverSigned.coverPhotoUrl = action.payload.toString();
            state.signedUser = updatedCoverSigned;
            return Object.assign({}, state, { currentUser: updatedCover, error: null, isNewCover: false });
        case UserActionTypes.ChangeCoverPhotoFail:
            return Object.assign({}, state, { currentUser: null, error: action.payload });
        case UserActionTypes.ChangeCoverPhoto:
            return Object.assign({}, state, { isNewCover: true });
        case UserActionTypes.ChangeProfilePhoto:
            return Object.assign({}, state, { isNewPhoto: true });
        case UserActionTypes.Login:
            return Object.assign({}, state, { userLoginProgress: true });
        case UserActionTypes.LoginSuccess:
            return Object.assign({}, state, { signedUser: action.payload, userLoginProgress: false, error: null });
        case UserActionTypes.LoginFail:
            return Object.assign({}, state, { error: action.payload, userLoginProgress: false });
        case UserActionTypes.Register:
            return Object.assign({}, state, { userRegisterProgress: true });
        case UserActionTypes.RegisterSuccess:
            return Object.assign({}, state, { registerResult: action.payload, userRegisterProgress: false });
        case UserActionTypes.RegisterFail:
            return Object.assign({}, state, { error: action.payload, userRegisterProgress: false });
        case UserActionTypes.LogoutSuccess:
            return Object.assign({}, state, { signedUser: null });
        case UserActionTypes.LogoutFail:
            return Object.assign({}, state, { error: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=user.reducer.js.map