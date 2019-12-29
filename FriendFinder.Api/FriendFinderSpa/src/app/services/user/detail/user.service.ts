import { Injectable, ɵChangeDetectorStatus } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
/* Rxjs */
import { tap, shareReplay, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
/* Models */
import { SignedUserDetails } from '../../../models/user/signedUserDetails';
import { ChangePassword } from '../../../models/user/changePassword';
import { User } from '../../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //TODO HEADERS MUST BE ADDED WHEN A SERVICE CALLED
  private userUrl = 'api/profile/';
  private accountSettingsUrl = 'api/accountsettings/';

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

  getSignedUserDetails(): Observable<SignedUserDetails> {
    const headers = new HttpHeaders
      ({
        "Authorization": "Bearer " + this.authService.getToken,
        'Content-Type': 'application/json'
      });

    return this.http.get<SignedUserDetails>(this.accountSettingsUrl + "getdetails", { headers: headers })
      .pipe(
        tap(),
        catchError(this.handleError)
      );
  }

  updateBasicInformation(details: SignedUserDetails): Observable<SignedUserDetails> {
    const headers = new HttpHeaders
      ({
        "Authorization": "Bearer " + this.authService.getToken
      });
    return this.http.post(this.accountSettingsUrl + "updatebasic", details, { headers: headers })
      .pipe(
        tap((data: any) => {
        }),
        catchError(this.handleError)
      );
  }

  changePassword(data: ChangePassword): Observable<ChangePassword> {
    const headers = new HttpHeaders
      ({
        "Authorization": "Bearer " + this.authService.getToken
      });
    return this.http.post(this.accountSettingsUrl + "updatepassword", data, { headers: headers })
      .pipe(
        tap((data: any) => {
        }),
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
