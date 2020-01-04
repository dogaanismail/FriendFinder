import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/user/auth/auth.service';
import { UserService } from '../../services/user/detail/user.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userActions from '../actions/user.actions';
import { User } from 'src/app/models/user/user';


@Injectable()
export class UserEffects {
    constructor
        (
            private userService: UserService,
            private authService: AuthService,
            private actions$: Actions
        ) { }


    @Effect()
    getUserDetail$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserActionTypes.SetCurrentUser),
        map((action: userActions.SetCurrentUser) => action.payload),
        mergeMap((userName: string) =>
            this.userService.getUserDetail(userName).pipe(
                map((currentUser: any) => (new userActions.SetCurrentUserSuccess(currentUser.result))),
                catchError(err => of(new userActions.SetCurrentUserFail(err)))
            )
        )
    );

    @Effect()
    changeProfilePhoto$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserActionTypes.ChangeProfilePhoto),
        map((action: userActions.ChangeProfilePhoto) => action.payload),
        mergeMap((file: any) =>
            this.userService.changeProfilePhoto(file).pipe(
                map((newPhotoUrl: any) => (new userActions.ChangeProfilePhotoSuccess(newPhotoUrl.result))),
                catchError(err => of(new userActions.ChangeProfilePhotoFail(err)))
            )
        )
    );

    @Effect()
    changeCoverPhoto$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserActionTypes.ChangeCoverPhoto),
        map((action: userActions.ChangeCoverPhoto) => action.payload),
        mergeMap((file: any) =>
            this.userService.changeCoverPhoto(file).pipe(
                map((newPhotoUrl: any) => (new userActions.ChangeCoverPhotoSuccess(newPhotoUrl.result))),
                catchError(err => of(new userActions.ChangeCoverPhotoFail(err)))
            )
        )
    );

    @Effect()
    userLogOut$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserActionTypes.Logout),
        mergeMap(action =>
            this.authService.logOut().pipe(
                map((result: any) => (new userActions.LogoutSuccess())),
                catchError(err => of(new userActions.LogoutFail(err)))
            )
        )
    );

}
