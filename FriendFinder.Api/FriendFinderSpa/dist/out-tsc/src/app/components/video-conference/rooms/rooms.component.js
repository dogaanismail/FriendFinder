import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { tap } from 'rxjs/operators';
let RoomsComponent = class RoomsComponent {
    constructor(videoChatService) {
        this.videoChatService = videoChatService;
        this.roomChanged = new EventEmitter();
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.updateRooms();
            this.subscription =
                this.videoChatService
                    .$roomsUpdated
                    .pipe(tap(_ => this.updateRooms()))
                    .subscribe();
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    onTryAddRoom() {
        if (this.roomName) {
            this.onAddRoom(this.roomName);
        }
    }
    onAddRoom(roomName) {
        this.roomName = null;
        this.roomChanged.emit(roomName);
    }
    onJoinRoom(roomName) {
        this.roomChanged.emit(roomName);
    }
    updateRooms() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.rooms = (yield this.videoChatService.getAllRooms());
        });
    }
};
tslib_1.__decorate([
    Output()
], RoomsComponent.prototype, "roomChanged", void 0);
tslib_1.__decorate([
    Input()
], RoomsComponent.prototype, "activeRoomName", void 0);
RoomsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-rooms',
        styleUrls: ['../css-file/bootstrap4.css', './rooms.component.css'],
        templateUrl: './rooms.component.html',
    })
], RoomsComponent);
export { RoomsComponent };
//# sourceMappingURL=rooms.component.js.map