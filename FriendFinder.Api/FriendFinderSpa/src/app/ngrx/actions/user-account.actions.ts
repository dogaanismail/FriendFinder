import { Action } from '@ngrx/store';
import { SignedUserDetails } from '../../models/user/signedUserDetails';

export enum UserAccountActionTypes {
    GetSignedUserDetail = '[User] Get Signed User Detail',
    GetSignedUserDetailSuccess = '[User] Get Signed User Detail Success',
    GetSignedUserDetailFail = '[User] Get Signed User Detail Fail',
    UpdateBasicInformations = '[User] Update Basic Informations',
    UpdateBasicInformationsSuccess = '[User] Update Basic Informations Success',
    UpdateBasicInformationsFail = '[User] Update Basic Informations Fail'
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

export type UserAccountActions = GetSignedUserDetail
    | GetSignedUserDetailSuccess
    | GetSignedUserDetailFail
    | UpdateBasicInformations
    | UpdateBasicInformationsSuccess
    | UpdateBasicInformationsFail;
