import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import * as userActions from "../../../ngrx/actions/user.actions";
let RegisterComponent = class RegisterComponent {
    constructor(authService, formBuilder, alertifyService, store, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.alertifyService = alertifyService;
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        this.createRegisterForm();
    }
    createRegisterForm() {
        this.registerForm = this.formBuilder.group({
            firstName: ["", Validators.required],
            lastName: ["", Validators.required],
            email: ["", Validators.required],
            userName: ["", Validators.required],
            password: [
                "",
                [
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(12)
                ]
            ],
            rePassword: ["", Validators.required]
        }, { validator: this.passwordMatchValidator });
    }
    passwordMatchValidator(g) {
        return g.get("password").value === g.get("rePassword").value
            ? null
            : { misMatch: true };
    }
    register() {
        if (this.registerForm.valid) {
            this.registerUser = Object.assign({}, this.registerForm.value);
            this.authService.register(this.registerUser).subscribe((data) => {
                if (data.result.status === false) {
                    this.alertifyService.error(data.result.message.toString());
                    this.store.dispatch(new userActions.RegisterFail(data.result.message));
                }
                else {
                    this.store.dispatch(new userActions.RegisterSuccess(data.result.message));
                    this.alertifyService.success("You can login !");
                    this.router.navigate(["/account/login"]);
                }
            });
        }
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: "app-register",
        templateUrl: "./register.component.html",
        styleUrls: ["./register.component.css"]
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map