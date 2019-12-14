import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/* Ngrx */
import { select } from '@ngrx/store';
import * as fromUser from '../../../ngrx/selectors/user.selectors';
let TimelineFriendsComponent = class TimelineFriendsComponent {
    constructor(userStore) {
        this.userStore = userStore;
    }
    ngOnInit() {
        this.signedUser$ = this.userStore.pipe(select(fromUser.getSignedUser));
    }
};
TimelineFriendsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-timeline-friends',
        templateUrl: './timeline-friends.component.html',
        styleUrls: ['./timeline-friends.component.css']
    })
], TimelineFriendsComponent);
export { TimelineFriendsComponent };
//# sourceMappingURL=timeline-friends.component.js.map