import * as tslib_1 from "tslib";
import { Component, ViewChild, Output, Input, EventEmitter } from '@angular/core';
let ParticipantsComponent = class ParticipantsComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.participantsChanged = new EventEmitter();
        this.leaveRoom = new EventEmitter();
    }
    get participantCount() {
        return !!this.participants ? this.participants.size : 0;
    }
    get isAlone() {
        return this.participantCount === 0;
    }
    clear() {
        if (this.participants) {
            this.participants.clear();
        }
    }
    initialize(participants) {
        this.participants = participants;
        if (this.participants) {
            this.participants.forEach(participant => this.registerParticipantEvents(participant));
        }
    }
    add(participant) {
        if (this.participants && participant) {
            this.participants.set(participant.sid, participant);
            this.registerParticipantEvents(participant);
        }
    }
    remove(participant) {
        if (this.participants && this.participants.has(participant.sid)) {
            this.participants.delete(participant.sid);
        }
    }
    loudest(participant) {
        this.dominantSpeaker = participant;
    }
    onLeaveRoom() {
        this.leaveRoom.emit(true);
    }
    registerParticipantEvents(participant) {
        if (participant) {
            participant.tracks.forEach(publication => this.subscribe(publication));
            participant.on('trackPublished', publication => this.subscribe(publication));
            participant.on('trackUnpublished', publication => {
                if (publication && publication.track) {
                    this.detachRemoteTrack(publication.track);
                }
            });
        }
    }
    subscribe(publication) {
        if (publication && publication.on) {
            publication.on('subscribed', track => this.attachRemoteTrack(track));
            publication.on('unsubscribed', track => this.detachRemoteTrack(track));
        }
    }
    attachRemoteTrack(track) {
        if (this.isAttachable(track)) {
            const element = track.attach();
            this.renderer.data.id = track.sid;
            this.renderer.setStyle(element, 'width', '95%');
            this.renderer.setStyle(element, 'margin-left', '2.5%');
            this.renderer.appendChild(this.listRef.nativeElement, element);
            this.participantsChanged.emit(true);
        }
    }
    detachRemoteTrack(track) {
        if (this.isDetachable(track)) {
            track.detach().forEach(el => el.remove());
            this.participantsChanged.emit(true);
        }
    }
    isAttachable(track) {
        return !!track &&
            (track.attach !== undefined ||
                track.attach !== undefined);
    }
    isDetachable(track) {
        return !!track &&
            (track.detach !== undefined ||
                track.detach !== undefined);
    }
};
tslib_1.__decorate([
    ViewChild('list', { static: false })
], ParticipantsComponent.prototype, "listRef", void 0);
tslib_1.__decorate([
    Output('participantsChanged')
], ParticipantsComponent.prototype, "participantsChanged", void 0);
tslib_1.__decorate([
    Output('leaveRoom')
], ParticipantsComponent.prototype, "leaveRoom", void 0);
tslib_1.__decorate([
    Input('activeRoomName')
], ParticipantsComponent.prototype, "activeRoomName", void 0);
ParticipantsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-participants',
        styleUrls: ['../css-file/bootstrap4.css', './participants.component.css'],
        templateUrl: './participants.component.html',
    })
], ParticipantsComponent);
export { ParticipantsComponent };
//# sourceMappingURL=participants.component.js.map