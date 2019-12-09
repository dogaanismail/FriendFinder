import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
let AuthService = class AuthService {
    constructor(httpClient, alertifyService, router) {
        this.httpClient = httpClient;
        this.alertifyService = alertifyService;
        this.router = router;
        this.path = "api/Account";
        this.jwtHelper = new JwtHelperService();
        this.TOKEN_KEY = "token";
    }
    login(loginUser) {
        let headers = new HttpHeaders();
        headers.append("Content-Type", "application/json");
        return this.httpClient.post(this.path + "/login", loginUser, { headers: headers }).pipe(tap((data) => {
        }), catchError(this.handleError));
    }
    register(registerUser) {
        let headers = new HttpHeaders();
        headers.append("Content-Type", "application/json");
        return this.httpClient
            .post(this.path + "/register", registerUser, { headers: headers })
            .pipe(tap((data) => {
        }), catchError(this.handleError));
    }
    logOut() {
        localStorage.removeItem(this.TOKEN_KEY);
    }
    saveToken(token) {
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
    handleError(err) {
        let errorMessage;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map