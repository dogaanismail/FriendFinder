import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import * as userActions from '../../../ngrx/actions/user.actions';
let ProfileNavbarComponent = class ProfileNavbarComponent {
    constructor(userStore) {
        this.userStore = userStore;
        this.profilePhotoData = null;
        this.coverPhotoData = null;
    }
    ngOnInit() {
    }
    changeCover(fileInput) {
        let formData = new FormData();
        this.coverPhotoData = fileInput.target.files[0];
        if (this.coverPhotoData != null) {
            formData.append("coverphoto", this.coverPhotoData);
        }
        this.userStore.dispatch(new userActions.ChangeCoverPhoto(formData));
    }
    changeProfile(fileInput) {
        let formData = new FormData();
        this.profilePhotoData = fileInput.target.files[0];
        if (this.profilePhotoData != null) {
            formData.append("profilephoto", this.profilePhotoData);
        }
        this.userStore.dispatch(new userActions.ChangeProfilePhoto(formData));
    }
};
tslib_1.__decorate([
    Input()
], ProfileNavbarComponent.prototype, "user", void 0);
tslib_1.__decorate([
    Input()
], ProfileNavbarComponent.prototype, "newPhoto", void 0);
tslib_1.__decorate([
    Input()
], ProfileNavbarComponent.prototype, "newCover", void 0);
tslib_1.__decorate([
    Input()
], ProfileNavbarComponent.prototype, "signedUser", void 0);
ProfileNavbarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-profile-navbar',
        templateUrl: './profile-navbar.component.html'
    })
], ProfileNavbarComponent);
export { ProfileNavbarComponent };
//# sourceMappingURL=profile-navbar.component.js.map