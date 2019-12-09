import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, tap } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';

/* NgRx && RxJs */
import * as ErrorState from '../../ngrx/reducers/global-error.reducer';
import * as errorActions from '../../ngrx/actions/global-error.actions';
import { Observable, throwError } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private store: Store<ErrorState.ErrorState>
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(tap((err: any) => {

      console.log(err);
      if(err.status === 400) {
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
}