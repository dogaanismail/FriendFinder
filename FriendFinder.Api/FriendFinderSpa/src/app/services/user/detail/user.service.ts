import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../../../models/user/user';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { tap, shareReplay, catchError } from 'rxjs/operators';
import { SignedUserDetails } from '../../../models/user/signedUserDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'api/profile/';
  private accountSettingsUrl: 'api/accountsettings/';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getUserDetail(userName: string): Observable<User> {
    const headers = new HttpHeaders
      ({
        "Authorization": "Bearer " + this.authService.getToken,
        'Content-Type': 'application/json'
      });

    const params = new HttpParams().set('username', userName)
    return this.http.get<User>(this.userUrl + "getuser", { params })
      .pipe(
        tap(),
        shareReplay(1),
        catchError(this.handleError)
      );
  }

  changeProfilePhoto(file: any): Observable<User> {
    const headers = new HttpHeaders
      ({
        "Authorization": "Bearer " + this.authService.getToken,
        'Content-Type': 'application/json'
      });

    return this.http.post(this.userUrl + "changephoto", file)
      .pipe(
        tap((data: any) => {
        }),
        catchError(this.handleError)
      );
  }

  changeCoverPhoto(file: any): Observable<User> {
    const headers = new HttpHeaders
      ({
        "Authorization": "Bearer " + this.authService.getToken,
        'Content-Type': 'application/json'
      });

    return this.http.post(this.userUrl + "changecover", file)
      .pipe(
        tap((data: any) => {
        }),
        catchError(this.handleError)
      );
  }

  getSignedUserDetails(userName: string): Observable<SignedUserDetails> {
    const headers = new HttpHeaders
      ({
        "Authorization": "Bearer " + this.authService.getToken,
        'Content-Type': 'application/json'
      });

    const params = new HttpParams().set('username', userName)
    return this.http.get<SignedUserDetails>(this.accountSettingsUrl + "getuserinformations", { params })
      .pipe(
        tap(),
        shareReplay(1),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
