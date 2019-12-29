import { Action } from '@ngrx/store';
import { SignedUserDetails } from '../../models/user/signedUserDetails';
import { ChangePassword } from '../../models/user/changePassword';

export enum UserAccountActionTypes {
    GetSignedUserDetail = '[User] Get Signed User Detail',
    GetSignedUserDetailSuccess = '[User] Get Signed User Detail Success',
    GetSignedUserDetailFail = '[User] Get Signed User Detail Fail',
    UpdateBasicInformations = '[User] Update Basic Informations',
    UpdateBasicInformationsSuccess = '[User] Update Basic Informations Success',
    UpdateBasicInformationsFail = '[User] Update Basic Informations Fail',
    UpdatePassword = '[User] Update Password',
    UpdatePasswordSuccess = '[User] Update Password Success',
    UpdatePasswordFail = '[User] Update Password Fail'
}

export class GetSignedUserDetail implements Action {
    readonly type = UserAccountActionTypes.GetSignedUserDetail;
}

export class GetSignedUserDetailSuccess implements Action {
    readonly type = UserAccountActionTypes.GetSignedUserDetailSuccess;

    constructor(public payload: any) { }
}

export class GetSignedUserDetailFail implements Action {
    readonly type = UserAccountActionTypes.GetSignedUserDetailFail;

    constructor(public payload: object) { }
}

export class UpdateBasicInformations implements Action {
    readonly type = UserAccountActionTypes.UpdateBasicInformations;

    constructor(public payload: SignedUserDetails) { }
}

export class UpdateBasicInformationsSuccess implements Action {
    readonly type = UserAccountActionTypes.UpdateBasicInformationsSuccess;

    constructor(public payload: any) { }
}

export class UpdateBasicInformationsFail implements Action {
    readonly type = UserAccountActionTypes.UpdateBasicInformationsFail;

    constructor(public payload: object) { }
}

export class UpdatePassword implements Action {
    readonly type = UserAccountActionTypes.UpdatePassword;

    constructor(public payload: ChangePassword) { }
}

export class UpdatePasswordSuccess implements Action {
    readonly type = UserAccountActionTypes.UpdatePasswordSuccess;

    constructor(public payload: any) { }
}

export class UpdatePasswordFail implements Action {
    readonly type = UserAccountActionTypes.UpdatePasswordFail;

    constructor(public payload: object) { }
}

export type UserAccountActions = GetSignedUserDetail
    | GetSignedUserDetailSuccess
    | GetSignedUserDetailFail
    | UpdateBasicInformations
    | UpdateBasicInformationsSuccess
    | UpdateBasicInformationsFail
    | UpdatePassword
    | UpdatePasswordSuccess
    | UpdatePasswordFail;
