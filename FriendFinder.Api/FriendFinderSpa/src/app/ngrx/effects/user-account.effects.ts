import { Injectable } from '@angular/core';
import { UserService } from '../../services/user/detail/user.service';
/* Models */
import { SignedUserDetails } from '../../models/user/signedUserDetails';
import { ChangePassword } from '../../models/user/changePassword';
/* RxJs */
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userAccountActions from '../actions/user-account.actions';

@Injectable()
export class UserAccountEffects {
    constructor
        (
            private userService: UserService,
            private actions$: Actions
        ) { }


    @Effect()
    getSignedUserDetail$: Observable<Action> = this.actions$.pipe(
        ofType(userAccountActions.UserAccountActionTypes.GetSignedUserDetail),
        mergeMap(action =>
            this.userService.getSignedUserDetails().pipe(
                map((userDetail: any) => (new userAccountActions.GetSignedUserDetailSuccess(userDetail.result))),
                catchError(err => of(new userAccountActions.GetSignedUserDetailFail(err)))
            )
        )
    );

    @Effect()
    updateBasicInformation$: Observable<Action> = this.actions$.pipe(
        ofType(userAccountActions.UserAccountActionTypes.UpdateBasicInformations),
        map(((action: userAccountActions.UpdateBasicInformations) => action.payload)),
        mergeMap((details: SignedUserDetails) =>
            this.userService.updateBasicInformation(details).pipe(
                map((updateResult: any) => (new userAccountActions.UpdateBasicInformationsSuccess(updateResult.result))),
                catchError(err => of(new userAccountActions.UpdateBasicInformationsFail(err)))
            )
        )
    );

    @Effect()
    updatePassword$: Observable<Action> = this.actions$.pipe(
        ofType(userAccountActions.UserAccountActionTypes.UpdatePassword),
        map(((action: userAccountActions.UpdatePassword) => action.payload)),
        mergeMap((data: ChangePassword) =>
            this.userService.changePassword(data).pipe(
                map((updateResult: any) => (new userAccountActions.UpdatePasswordSuccess(updateResult.result))),
                catchError(err => of(new userAccountActions.UpdatePasswordFail(err)))
            )
        )
    );
}
