import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
/* NgRx */
import * as fromUser from './ngrx/selectors/user.selectors';
import { select } from '@ngrx/store';
let AppComponent = class AppComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.title = 'FriendFinder-SPA';
        this.showFooter = null;
        this.showHeader = null;
    }
    ngOnInit() {
        this.signedUser$ = this.store.pipe(select(fromUser.getSignedUser));
        this.router.events.subscribe((event) => {
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
        templateUrl: './app.component.html'
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map