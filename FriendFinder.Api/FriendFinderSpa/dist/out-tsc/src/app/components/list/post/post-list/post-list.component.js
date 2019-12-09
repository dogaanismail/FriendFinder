import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import * as fromPost from '../../../../ngrx/selectors/post.selectors';
import * as postActions from '../../../../ngrx/actions/post.actions';
let PostListComponent = class PostListComponent {
    constructor(store) {
        this.store = store;
        this.componentActive = true;
    }
    ngOnInit() {
        this.store.dispatch(new postActions.Load());
        this.posts$ = this.store.pipe(select(fromPost.getPosts));
        this.errorMessage$ = this.store.pipe(select(fromPost.getError));
    }
    ngOnDestroy() {
        this.componentActive = false;
    }
};
PostListComponent = tslib_1.__decorate([
    Component({
        selector: "app-post-list",
        templateUrl: "./post-list.component.html",
        styleUrls: ["./post-list.component.css"]
    })
], PostListComponent);
export { PostListComponent };
//# sourceMappingURL=post-list.component.js.map