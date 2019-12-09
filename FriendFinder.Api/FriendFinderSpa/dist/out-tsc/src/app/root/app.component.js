import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'FriendFinder-SPA';
        this.showFooter = null;
        this.showHeader = null;
    }
    ngOnInit() {
        this.router.events
            .subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.showFooter = (event.url !== '/account/register');
                this.showHeader = (event.url !== '/account/login');
            }
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map