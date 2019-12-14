import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { PostTypeEnum } from '../../../core/enumerations/PostTypeEnum';
/* Rxjs */
import { map, catchError } from 'rxjs/operators';
/* NgRx */
import * as fromUser from "../../../ngrx/selectors/user.selectors";
import * as fromPost from '../../../ngrx/selectors/post.selectors';
import * as userActions from "../../../ngrx/actions/user.actions";
import * as postActions from './../../../ngrx/actions/post.actions';
import { throwError } from "rxjs";
import { select } from "@ngrx/store";
let ProfileAlbumComponent = class ProfileAlbumComponent {
    constructor(modalService, route, userStore) {
        this.modalService = modalService;
        this.route = route;
        this.userStore = userStore;
    }
    ngOnInit() {
        const username = this.route.snapshot.paramMap.get("username");
        if (username) {
            this.userStore.dispatch(new userActions.SetCurrentUser(username));
            this.user$ = this.userStore.pipe(select(fromUser.getCurrentUser));
            this.imagePost$ = this.user$.pipe(map((imagePost) => imagePost.userPosts.filter((post) => post.postType === PostTypeEnum.PostImage)), catchError(this.handleError));
            this.isNewCover$ = this.userStore.pipe(select(fromUser.getIsNewCover));
            this.isNewPhoto$ = this.userStore.pipe(select(fromUser.getIsNewPhoto));
        }
    }
    openModal(id, postId) {
        this.modalService.open(id);
        this.userStore.dispatch(new postActions.SetCurrentPost(postId));
        this.filledPost();
    }
    filledPost() {
        this.userStore.pipe(select(fromPost.getCurrentPost)).subscribe(selectPost => {
            this.selectedPost = selectPost;
        });
    }
    closeModal(id) {
        this.modalService.close(id);
        this.userStore.dispatch(new postActions.ClearCurrentPost());
    }
    handleError(err) {
        if (err.error instanceof ErrorEvent) {
            this.errorMessage = "`An error occurred";
            console.error(this.errorMessage);
            return throwError(this.errorMessage);
        }
    }
};
ProfileAlbumComponent = tslib_1.__decorate([
    Component({
        selector: "app-profile-album",
        templateUrl: "./profile-album.component.html"
    })
], ProfileAlbumComponent);
export { ProfileAlbumComponent };
//# sourceMappingURL=profile-album.component.js.map