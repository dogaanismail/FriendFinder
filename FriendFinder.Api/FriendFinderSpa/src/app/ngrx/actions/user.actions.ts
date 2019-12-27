import { Action } from '@ngrx/store';
import { User } from '../../models/user/user';

export enum UserActionTypes {
  GetCurrentUser = '[User] Get Current User',
  SetCurrentUser = '[User] Set Current User',
  SetCurrentUserSuccess = '[User] Set Current User Success',
  SetCurrentUserFail = '[User] Set Current User Fail',
  ChangeProfilePhoto = '[User] Change Profile Photo',
  ChangeProfilePhotoSuccess = '[User] Change Profile Photo Success',
  ChangeProfilePhotoFail = '[User] Change Profile Photo Fail',
  ChangeCoverPhoto = '[User] Change Cover Photo',
  ChangeCoverPhotoSuccess = '[User] Change Cover Photo Success',
  ChangeCoverPhotoFail = '[User] Change Cover Photo Fail',
  Login = '[User] Login User',
  LoginSuccess = '[User] Login User Success',
  LoginFail = '[User] Login User Fail',
  Register = '[User] Register User',
  RegisterSuccess = '[User] Register User Success',
  RegisterFail = '[User] Register User Fail',
  Logout = '[User] Logout User',
  LogoutSuccess = '[User] Logout User Success',
  LogoutFail = '[User] Logout User Fail'
} 

export class GetCurrentUser implements Action {
  readonly type = UserActionTypes.GetCurrentUser;

  constructor(public payload: User) { }
}

export class SetCurrentUser implements Action {
  readonly type = UserActionTypes.SetCurrentUser;

  constructor(public payload: string) { }
}

export class SetCurrentUserSuccess implements Action {
  readonly type = UserActionTypes.SetCurrentUserSuccess;

  constructor(public payload: User) { }
}

export class SetCurrentUserFail implements Action {
  readonly type = UserActionTypes.SetCurrentUserFail;

  constructor(public payload: object) { }
}

export class ChangeProfilePhoto implements Action {
  readonly type = UserActionTypes.ChangeProfilePhoto;

  constructor(public payload: any) { }
}

export class ChangeProfilePhotoSuccess implements Action {
  readonly type = UserActionTypes.ChangeProfilePhotoSuccess;

  constructor(public payload: string) { }
}

export class ChangeProfilePhotoFail implements Action {
  readonly type = UserActionTypes.ChangeProfilePhotoFail;

  constructor(public payload: object) { }
}

export class ChangeCoverPhoto implements Action {
  readonly type = UserActionTypes.ChangeCoverPhoto;

  constructor(public payload: any) { }
}

export class ChangeCoverPhotoSuccess implements Action {
  readonly type = UserActionTypes.ChangeCoverPhotoSuccess;

  constructor(public payload: string) { }
}

export class ChangeCoverPhotoFail implements Action {
  readonly type = UserActionTypes.ChangeCoverPhotoFail;

  constructor(public payload: object) { }
}

export class Login implements Action {
  readonly type = UserActionTypes.Login;

  constructor(public payload: any) { }
}

export class LoginSuccess implements Action {
  readonly type = UserActionTypes.LoginSuccess;

  constructor(public payload: any) { }
}

export class LoginFail implements Action {
  readonly type = UserActionTypes.LoginFail;

  constructor(public payload: object) { }
}

export class Register implements Action {
  readonly type = UserActionTypes.Register;

  constructor(public payload: any) { }
}

export class RegisterSuccess implements Action {
  readonly type = UserActionTypes.RegisterSuccess;

  constructor(public payload: object) { }
}

export class RegisterFail implements Action {
  readonly type = UserActionTypes.RegisterFail;

  constructor(public payload: object) { }
}

export class LogoutSuccess implements Action {
  readonly type = UserActionTypes.LogoutSuccess;
}

export class LogoutFail implements Action {
  readonly type = UserActionTypes.LogoutFail;

  constructor(public payload: object) { }
}


export type UserActions = GetCurrentUser
  | SetCurrentUser
  | SetCurrentUserSuccess
  | SetCurrentUserFail
  | ChangeProfilePhoto
  | ChangeProfilePhotoFail
  | ChangeProfilePhotoSuccess
  | ChangeCoverPhoto
  | ChangeCoverPhotoSuccess
  | ChangeCoverPhotoFail
  | Login
  | LoginSuccess
  | LoginFail
  | Register
  | RegisterSuccess
  | RegisterFail
  | LogoutSuccess
  | LogoutFail;
