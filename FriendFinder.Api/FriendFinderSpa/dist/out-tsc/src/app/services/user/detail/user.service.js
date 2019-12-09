import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, shareReplay, catchError } from 'rxjs/operators';
let UserService = class UserService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.userUrl = 'api/profile/';
    }
    getUserDetail(userName) {
        const headers = new HttpHeaders({
            "Authorization": "Bearer " + this.authService.getToken,
            'Content-Type': 'application/json'
        });
        const params = new HttpParams().set('username', userName);
        return this.http.get(this.userUrl + "getuser", { params })
            .pipe(tap(), shareReplay(1), catchError(this.handleError));
    }
    changeProfilePhoto(file) {
        const headers = new HttpHeaders({
            "Authorization": "Bearer " + this.authService.getToken,
            'Content-Type': 'application/json'
        });
        return this.http.post(this.userUrl + "changephoto", file)
            .pipe(tap((data) => {
        }), catchError(this.handleError));
    }
    changeCoverPhoto(file) {
        const headers = new HttpHeaders({
            "Authorization": "Bearer " + this.authService.getToken,
            'Content-Type': 'application/json'
        });
        return this.http.post(this.userUrl + "changecover", file)
            .pipe(tap((data) => {
        }), catchError(this.handleError));
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
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map