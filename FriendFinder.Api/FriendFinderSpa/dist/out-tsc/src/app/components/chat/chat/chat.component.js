import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let ChatComponent = class ChatComponent {
    constructor(chatGroupService) {
        this.chatGroupService = chatGroupService;
    }
    ngOnInit() {
        this.chatGroupService.getChatGroups().subscribe((data) => {
            this.chatGroups = data.result;
        });
    }
};
ChatComponent = tslib_1.__decorate([
    Component({
        selector: 'app-chat',
        templateUrl: './chat.component.html',
        styleUrls: ['../../../../../node_modules/bulma/css/bulma.css',
            '../css-files/css/core.css', '../css-files/css/materialdesignicons.min.css'],
        encapsulation: ViewEncapsulation.None
    })
], ChatComponent);
export { ChatComponent };
//# sourceMappingURL=chat.component.js.map