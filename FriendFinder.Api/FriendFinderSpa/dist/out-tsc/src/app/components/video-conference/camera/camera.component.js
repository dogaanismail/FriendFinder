import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { createLocalTracks } from 'twilio-video';
let CameraComponent = class CameraComponent {
    constructor(storageService, renderer) {
        this.storageService = storageService;
        this.renderer = renderer;
        this.isInitializing = true;
        this.localTracks = [];
    }
    get tracks() {
        return this.localTracks;
    }
    ngAfterViewInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.previewElement && this.previewElement.nativeElement) {
                const selectedVideoInput = this.storageService.get('videoInputId');
                yield this.initializeDevice('videoinput', selectedVideoInput);
            }
        });
    }
    initializePreview(deviceInfo) {
        if (deviceInfo) {
            this.initializeDevice(deviceInfo.kind, deviceInfo.deviceId);
        }
        else {
            this.initializeDevice();
        }
    }
    finalizePreview() {
        try {
            if (this.videoTrack) {
                this.videoTrack.detach().forEach((element) => element.remove());
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    initializeDevice(kind, deviceId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.isInitializing = true;
                this.finalizePreview();
                this.localTracks = kind && deviceId
                    ? yield this.initializeTracks(kind, deviceId)
                    : yield this.initializeTracks();
                this.videoTrack = this.localTracks.find(t => t.kind === 'video');
                const videoElement = this.videoTrack.attach();
                this.renderer.setStyle(videoElement, 'height', '100%');
                this.renderer.setStyle(videoElement, 'width', '100%');
                this.renderer.appendChild(this.previewElement.nativeElement, videoElement);
            }
            finally {
                this.isInitializing = false;
            }
        });
    }
    initializeTracks(kind, deviceId) {
        if (kind) {
            switch (kind) {
                case 'audioinput':
                    return createLocalTracks({ audio: { deviceId }, video: true });
                case 'videoinput':
                    return createLocalTracks({ audio: true, video: { deviceId } });
            }
        }
        return createLocalTracks({ audio: true, video: true });
    }
};
tslib_1.__decorate([
    ViewChild('preview', { static: false })
], CameraComponent.prototype, "previewElement", void 0);
CameraComponent = tslib_1.__decorate([
    Component({
        selector: 'app-camera',
        styleUrls: ['../css-file/bootstrap4.css', './camera.component.css'],
        templateUrl: './camera.component.html',
    })
], CameraComponent);
export { CameraComponent };
//# sourceMappingURL=camera.component.js.map