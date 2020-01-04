import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";
import { AlertifyService } from "../../alertfiy/alertify.service";
import { LoginUser } from "../../../models/user/loginUser";
import { RegisterUser } from "../../../models/user/registerUser";
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }

  path = "api/Account";
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  TOKEN_KEY = "token";

  login(loginUser: LoginUser): Observable<LoginUser> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.httpClient.post(this.path + "/login", loginUser, { headers: headers }).pipe(
      tap((data: any) => {
      }),
      catchError(this.handleError)
    );
  }

  register(registerUser: RegisterUser): Observable<RegisterUser> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.httpClient
      .post(this.path + "/register", registerUser, { headers: headers })
      .pipe(
        tap((data: any) => {
        }),
        catchError(this.handleError)
      );
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.httpClient.post(this.path + "/logout", { headers: headers }).pipe(
      tap((data: any) => {
      }),
      catchError(this.handleError)
    );
  }

  saveToken(token: any) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  loggedIn() {
    return this.jwtHelper.isTokenExpired("token");
  }

  get getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUserId() {
    return this.jwtHelper.decodeToken(localStorage.getItem(this.getToken)).nameid;
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
