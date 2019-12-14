import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
/* NgRx */
import * as fromUser from "../../../ngrx/selectors/user.selectors";
import * as userActions from "../../../ngrx/actions/user.actions";
import { select } from "@ngrx/store";
let ProfileAboutComponent = class ProfileAboutComponent {
    constructor(router, route, userStore) {
        this.router = router;
        this.route = route;
        this.userStore = userStore;
    }
    ngOnInit() {
        const username = this.route.snapshot.paramMap.get("username");
        if (username) {
            this.userStore.dispatch(new userActions.SetCurrentUser(username));
            this.user$ = this.userStore.pipe(select(fromUser.getCurrentUser));
            this.errorMessage$ = this.userStore.pipe(select(fromUser.getError));
            this.isNewCover$ = this.userStore.pipe(select(fromUser.getIsNewCover));
            this.isNewPhoto$ = this.userStore.pipe(select(fromUser.getIsNewPhoto));
        }
    }
};
ProfileAboutComponent = tslib_1.__decorate([
    Component({
        selector: "app-profile-about",
        templateUrl: "./profile-about.component.html"
    })
], ProfileAboutComponent);
export { ProfileAboutComponent };
//# sourceMappingURL=profile-about.component.js.map