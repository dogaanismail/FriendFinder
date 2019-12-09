import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import * as userActions from "../../../ngrx/actions/user.actions";
let LoginComponent = class LoginComponent {
    constructor(authService, alertifyService, router, store) {
        this.authService = authService;
        this.alertifyService = alertifyService;
        this.router = router;
        this.store = store;
        this.loginUser = {};
    }
    ngOnInit() { }
    login() {
        console.log(this.loginUser);
        this.authService.login(this.loginUser).subscribe((data) => {
            console.log(data);
            if (data.result.status === false) {
                this.alertifyService.error(data.result.message.toString());
                this.store.dispatch(new userActions.LoginFail(data.result.message));
            }
            else {
                this.store.dispatch(new userActions.LoginSuccess(data.result));
                this.authService.saveToken(data.result.refreshToken.toString());
                this.alertifyService.success("You have entered successfully !");
                this.router.navigate(["/"]);
            }
        });
    }
    logOut() {
        this.authService.logOut();
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: "app-login",
        templateUrl: "./login.component.html",
        styleUrls: ["./login.component.css"]
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map