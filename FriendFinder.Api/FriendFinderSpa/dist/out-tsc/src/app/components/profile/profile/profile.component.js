import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/* NgRx */
import * as fromUser from '../../../ngrx/selectors/user.selectors';
import * as userActions from '../../../ngrx/actions/user.actions';
import { select } from '@ngrx/store';
let ProfileComponent = class ProfileComponent {
    constructor(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
    }
    ngOnInit() {
        const username = this.route.snapshot.paramMap.get('username');
        if (username) {
            this.store.dispatch(new userActions.SetCurrentUser(username));
            this.user$ = this.store.pipe(select(fromUser.getCurrentUser));
            this.errorMessage$ = this.store.pipe(select(fromUser.getError));
            this.isNewCover$ = this.store.pipe(select(fromUser.getIsNewCover));
            this.isNewPhoto$ = this.store.pipe(select(fromUser.getIsNewPhoto));
        }
    }
};
ProfileComponent = tslib_1.__decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html'
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map