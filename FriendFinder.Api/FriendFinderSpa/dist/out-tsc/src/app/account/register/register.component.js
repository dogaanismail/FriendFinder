import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
let RegisterComponent = class RegisterComponent {
    constructor(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
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
            this.authService.register(this.registerUser);
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