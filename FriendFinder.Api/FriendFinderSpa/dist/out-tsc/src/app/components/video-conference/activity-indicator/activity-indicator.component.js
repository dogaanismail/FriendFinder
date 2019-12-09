import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let ActivityIndicatorComponent = class ActivityIndicatorComponent {
    constructor() {
        this.message = 'Loading... Please wait.';
    }
};
tslib_1.__decorate([
    Input()
], ActivityIndicatorComponent.prototype, "message", void 0);
ActivityIndicatorComponent = tslib_1.__decorate([
    Component({
        selector: 'app-activity-indicator',
        templateUrl: './activity-indicator.component.html',
        styleUrls: ['../css-file/bootstrap4.css', './activity-indicator.component.css'],
    })
], ActivityIndicatorComponent);
export { ActivityIndicatorComponent };
//# sourceMappingURL=activity-indicator.component.js.map