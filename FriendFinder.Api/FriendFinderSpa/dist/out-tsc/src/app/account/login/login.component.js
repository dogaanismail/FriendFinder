import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.loginUser = {};
    }
    ngOnInit() { }
    login() {
        this.authService.login(this.loginUser);
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