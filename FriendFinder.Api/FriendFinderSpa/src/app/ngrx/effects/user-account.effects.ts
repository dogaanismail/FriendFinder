import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user/detail/user.service';
import { SignedUserDetails } from '../../models/user/signedUserDetails';

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
}
