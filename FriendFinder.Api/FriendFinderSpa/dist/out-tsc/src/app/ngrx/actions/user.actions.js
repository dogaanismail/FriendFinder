export var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["GetCurrentUser"] = "[User] Get Current User";
    UserActionTypes["SetCurrentUser"] = "[User] Set Current User";
    UserActionTypes["SetCurrentUserSuccess"] = "[User] Set Current User Success";
    UserActionTypes["SetCurrentUserFail"] = "[User] Set Current User Fail";
    UserActionTypes["ChangeProfilePhoto"] = "[User] Change Profile Photo";
    UserActionTypes["ChangeProfilePhotoSuccess"] = "[User] Change Profile Photo Success";
    UserActionTypes["ChangeProfilePhotoFail"] = "[User] Change Profile Photo Fail";
    UserActionTypes["ChangeCoverPhoto"] = "[User] Change Cover Photo";
    UserActionTypes["ChangeCoverPhotoSuccess"] = "[User] Change Cover Photo Success";
    UserActionTypes["ChangeCoverPhotoFail"] = "[User] Change Cover Photo Fail";
    UserActionTypes["Login"] = "[User] Login User";
    UserActionTypes["LoginSuccess"] = "[User] Login User Success";
    UserActionTypes["LoginFail"] = "[User] Login User Fail";
    UserActionTypes["Register"] = "[User] Register User";
    UserActionTypes["RegisterSuccess"] = "[User] Register User Success";
    UserActionTypes["RegisterFail"] = "[User] Register User Fail";
    UserActionTypes["Logout"] = "[User] Logout User";
    UserActionTypes["LogoutSuccess"] = "[User] Logout User Success";
    UserActionTypes["LogoutFail"] = "[User] Logout User Fail";
})(UserActionTypes || (UserActionTypes = {}));
export class GetCurrentUser {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.GetCurrentUser;
    }
}
export class SetCurrentUser {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.SetCurrentUser;
    }
}
export class SetCurrentUserSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.SetCurrentUserSuccess;
    }
}
export class SetCurrentUserFail {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.SetCurrentUserFail;
    }
}
export class ChangeProfilePhoto {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.ChangeProfilePhoto;
    }
}
export class ChangeProfilePhotoSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.ChangeProfilePhotoSuccess;
    }
}
export class ChangeProfilePhotoFail {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.ChangeProfilePhotoFail;
    }
}
export class ChangeCoverPhoto {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.ChangeCoverPhoto;
    }
}
export class ChangeCoverPhotoSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.ChangeCoverPhotoSuccess;
    }
}
export class ChangeCoverPhotoFail {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.ChangeCoverPhotoFail;
    }
}
export class Login {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.Login;
    }
}
export class LoginSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.LoginSuccess;
    }
}
export class LoginFail {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.LoginFail;
    }
}
export class Register {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.Register;
    }
}
export class RegisterSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.RegisterSuccess;
    }
}
export class RegisterFail {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.RegisterFail;
    }
}
export class LogoutSuccess {
    constructor() {
        this.type = UserActionTypes.LogoutSuccess;
    }
}
export class LogoutFail {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.LogoutFail;
    }
}
//# sourceMappingURL=user.actions.js.map