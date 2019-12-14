import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/* Ngrx */
import { select } from '@ngrx/store';
import * as fromUser from '../../../ngrx/selectors/user.selectors';
let TimelineMessagesComponent = class TimelineMessagesComponent {
    constructor(userStore) {
        this.userStore = userStore;
    }
    ngOnInit() {
        this.signedUser$ = this.userStore.pipe(select(fromUser.getSignedUser));
    }
};
TimelineMessagesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-timeline-messages',
        templateUrl: './timeline-messages.component.html',
        styleUrls: ['./timeline-messages.component.css']
    })
], TimelineMessagesComponent);
export { TimelineMessagesComponent };
//# sourceMappingURL=timeline-messages.component.js.map