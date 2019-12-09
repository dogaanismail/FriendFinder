import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
let AlertifyService = class AlertifyService {
    constructor() { }
    success(message) {
        alertify.success(message);
    }
    error(message) {
        alertify.error(message);
    }
    warning(message) {
        alertify.warning(message);
    }
    messaging(message) {
        alertify.success(message);
    }
};
AlertifyService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    })
], AlertifyService);
export { AlertifyService };
//# sourceMappingURL=alertify.service.js.map