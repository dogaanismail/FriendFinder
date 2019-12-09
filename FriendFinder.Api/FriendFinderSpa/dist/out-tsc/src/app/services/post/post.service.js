import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { throwError } from 'rxjs';
import { catchError, tap, shareReplay } from 'rxjs/operators';
let PostService = class PostService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.postUrl = 'api/post/';
    }
    createPost(post) {
        const headers = new HttpHeaders({
            "Authorization": "Bearer " + this.authService.getToken
        });
        return this.http.post(this.postUrl + "createpost", post, { headers: headers })
            .pipe(tap((data) => {
        }), catchError(this.handleError));
    }
    getPosts() {
        const headers = new HttpHeaders({
            "Authorization": "Bearer " + this.authService.getToken,
            'Content-Type': 'application/json'
        });
        return this.http.get(this.postUrl + "postlist", { headers: headers })
            .pipe(tap(), shareReplay(1), catchError(this.handleError));
    }
    createComment(comment) {
        const headers = new HttpHeaders({
            "Authorization": "Bearer " + this.authService.getToken,
            'Content-Type': 'application/json'
        });
        return this.http.post(this.postUrl + "createcomment", comment, { headers: headers })
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
PostService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    })
], PostService);
export { PostService };
//# sourceMappingURL=post.service.js.map