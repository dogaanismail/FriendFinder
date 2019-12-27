import { Action } from '@ngrx/store';

export enum UserAccountActionTypes {
    GetSignedUserDetail = '[User] Get Signed User Detail',
    GetSignedUserDetailSuccess = '[User] Get Signed User Detail Success',
    GetSignedUserDetailFail = '[User] Get Signed User Detail Fail'
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

export type UserAccountActions = GetSignedUserDetail
    | GetSignedUserDetailSuccess
    | GetSignedUserDetailFail;
