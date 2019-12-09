import * as tslib_1 from "tslib";
import { connect } from 'twilio-video';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
let VideoChatService = class VideoChatService {
    constructor(http) {
        this.http = http;
        this.roomBroadcast = new ReplaySubject();
        this.$roomsUpdated = this.roomBroadcast.asObservable();
    }
    getAuthToken() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const auth = yield this.http
                .get(`api/video/token`)
                .toPromise();
            return auth.token;
        });
    }
    getAllRooms() {
        return this.http
            .get('api/video/rooms')
            .toPromise();
    }
    joinOrCreateRoom(name, tracks) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let room = null;
            try {
                const token = yield this.getAuthToken();
                room =
                    yield connect(token, {
                        name,
                        tracks,
                        dominantSpeaker: true
                    });
            }
            catch (error) {
                console.error(`Unable to connect to Room: ${error.message}`);
            }
            finally {
                if (room) {
                    this.roomBroadcast.next(true);
                }
            }
            return room;
        });
    }
    nudge() {
        this.roomBroadcast.next(true);
    }
};
VideoChatService = tslib_1.__decorate([
    Injectable()
], VideoChatService);
export { VideoChatService };
//# sourceMappingURL=videochat.service.js.map