import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
let HomeComponent = class HomeComponent {
    constructor(videoChatService) {
        this.videoChatService = videoChatService;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const builder = new HubConnectionBuilder()
                .configureLogging(LogLevel.Information)
                .withUrl(`${location.origin}/notificationHub`);
            this.notificationHub = builder.build();
            this.notificationHub.on('RoomsUpdated', (updated) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (updated) {
                    yield this.rooms.updateRooms();
                }
            }));
            yield this.notificationHub.start();
        });
    }
    onSettingsChanged(deviceInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.camera.initializePreview(deviceInfo);
        });
    }
    onLeaveRoom(_) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.activeRoom) {
                this.activeRoom.disconnect();
                this.activeRoom = null;
            }
            this.camera.finalizePreview();
            const videoDevice = this.settings.hidePreviewCamera();
            this.camera.initializePreview(videoDevice);
            this.participants.clear();
        });
    }
    onRoomChanged(roomName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (roomName) {
                if (this.activeRoom) {
                    this.activeRoom.disconnect();
                }
                this.camera.finalizePreview();
                const tracks = yield this.settings.showPreviewCamera();
                this.activeRoom =
                    yield this.videoChatService
                        .joinOrCreateRoom(roomName, tracks);
                this.participants.initialize(this.activeRoom.participants);
                this.registerRoomEvents();
                this.notificationHub.send('RoomsUpdated', true);
            }
        });
    }
    onParticipantsChanged(_) {
        this.videoChatService.nudge();
    }
    registerRoomEvents() {
        this.activeRoom
            .on('disconnected', (room) => room.localParticipant.tracks.forEach(publication => this.detachLocalTrack(publication.track)))
            .on('participantConnected', (participant) => this.participants.add(participant))
            .on('participantDisconnected', (participant) => this.participants.remove(participant))
            .on('dominantSpeakerChanged', (dominantSpeaker) => this.participants.loudest(dominantSpeaker));
    }
    detachLocalTrack(track) {
        if (this.isDetachable(track)) {
            track.detach().forEach(el => el.remove());
        }
    }
    isDetachable(track) {
        return !!track
            && (track.detach !== undefined
                || track.detach !== undefined);
    }
};
tslib_1.__decorate([
    ViewChild('rooms', { static: false })
], HomeComponent.prototype, "rooms", void 0);
tslib_1.__decorate([
    ViewChild('camera', { static: false })
], HomeComponent.prototype, "camera", void 0);
tslib_1.__decorate([
    ViewChild('settings', { static: false })
], HomeComponent.prototype, "settings", void 0);
tslib_1.__decorate([
    ViewChild('participants', { static: false })
], HomeComponent.prototype, "participants", void 0);
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        styleUrls: ['../css-file/bootstrap4.css', './home.component.css'],
        templateUrl: './home.component.html',
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map