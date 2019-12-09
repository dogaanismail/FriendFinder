import { Action } from "@ngrx/store";

export enum GlobalErrorActionTypes {
    CreateGlobalError = '[GlobalError] GlobalError Create',
}

export class CreateGlobalError implements Action {
    readonly type = GlobalErrorActionTypes.CreateGlobalError;

    constructor(public payload: any) { }
}

export type GlobalErrorActions = CreateGlobalError;
