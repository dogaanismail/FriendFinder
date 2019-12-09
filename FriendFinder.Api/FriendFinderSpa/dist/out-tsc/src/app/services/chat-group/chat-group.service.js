import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { tap, shareReplay, catchError } from 'rxjs/operators';
let ChatGroupService = class ChatGroupService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.chatGroupUrl = 'api/chatgroup/';
    }
    getChatGroups() {
        const headers = new HttpHeaders({
            "Authorization": "Bearer " + this.authService.getToken,
            'Content-Type': 'application/json'
        });
        return this.http.get(this.chatGroupUrl + "getchatgroups", { headers: headers })
            .pipe(tap(), shareReplay(1), catchError(this.handleError));
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
ChatGroupService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ChatGroupService);
export { ChatGroupService };
//# sourceMappingURL=chat-group.service.js.map