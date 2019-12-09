import * as tslib_1 from "tslib";
import { tap } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import * as errorActions from '../../ngrx/actions/global-error.actions';
import { throwError } from 'rxjs';
let ErrorInterceptor = class ErrorInterceptor {
    constructor(store) {
        this.store = store;
    }
    intercept(request, next) {
        return next.handle(request).pipe(tap((err) => {
            console.log(err);
            if (err.status === 400) {
                console.log("Error occured !");
                this.store.dispatch(new errorActions.CreateGlobalError(err));
                return throwError(err);
            }
        }));
        //   return next.handle(request).pipe(
        //     catchError((error: HttpErrorResponse) => {
        //       console.log("Error occured !");
        //       this.store.dispatch(new errorActions.CreateGlobalError(error));
        //       return throwError(error);
        //     })
        //   )
        // }
    }
};
ErrorInterceptor = tslib_1.__decorate([
    Injectable()
], ErrorInterceptor);
export { ErrorInterceptor };
//# sourceMappingURL=error.interceptors.js.map