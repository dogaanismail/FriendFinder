import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Effect, ofType } from '@ngrx/effects';
import * as userActions from '../actions/user.actions';
let UserEffects = class UserEffects {
    constructor(userService, actions$) {
        this.userService = userService;
        this.actions$ = actions$;
        this.getUserDetail$ = this.actions$.pipe(ofType(userActions.UserActionTypes.SetCurrentUser), map((action) => action.payload), mergeMap((userName) => this.userService.getUserDetail(userName).pipe(map((currentUser) => (new userActions.SetCurrentUserSuccess(currentUser.result))), catchError(err => of(new userActions.SetCurrentUserFail(err))))));
        this.changeProfilePhoto$ = this.actions$.pipe(ofType(userActions.UserActionTypes.ChangeProfilePhoto), map((action) => action.payload), mergeMap((file) => this.userService.changeProfilePhoto(file).pipe(map((newPhotoUrl) => (new userActions.ChangeProfilePhotoSuccess(newPhotoUrl.result))), catchError(err => of(new userActions.ChangeProfilePhotoFail(err))))));
        this.changeCoverPhoto$ = this.actions$.pipe(ofType(userActions.UserActionTypes.ChangeCoverPhoto), map((action) => action.payload), mergeMap((file) => this.userService.changeCoverPhoto(file).pipe(map((newPhotoUrl) => (new userActions.ChangeCoverPhotoSuccess(newPhotoUrl.result))), catchError(err => of(new userActions.ChangeCoverPhotoFail(err))))));
    }
};
tslib_1.__decorate([
    Effect()
], UserEffects.prototype, "getUserDetail$", void 0);
tslib_1.__decorate([
    Effect()
], UserEffects.prototype, "changeProfilePhoto$", void 0);
tslib_1.__decorate([
    Effect()
], UserEffects.prototype, "changeCoverPhoto$", void 0);
UserEffects = tslib_1.__decorate([
    Injectable()
], UserEffects);
export { UserEffects };
//# sourceMappingURL=user.effects.js.map