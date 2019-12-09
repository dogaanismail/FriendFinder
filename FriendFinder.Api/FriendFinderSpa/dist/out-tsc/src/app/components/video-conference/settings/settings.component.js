import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
let SettingsComponent = class SettingsComponent {
    constructor(deviceService) {
        this.deviceService = deviceService;
        this.devices = [];
        this.settingsChanged = new EventEmitter();
    }
    get hasAudioInputOptions() {
        return this.devices && this.devices.filter(d => d.kind === 'audioinput').length > 0;
    }
    get hasAudioOutputOptions() {
        return this.devices && this.devices.filter(d => d.kind === 'audiooutput').length > 0;
    }
    get hasVideoInputOptions() {
        return this.devices && this.devices.filter(d => d.kind === 'videoinput').length > 0;
    }
    ngOnInit() {
        this.subscription =
            this.deviceService
                .$devicesUpdated
                .pipe(debounceTime(350))
                .subscribe((deviceListPromise) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.devices = yield deviceListPromise;
                this.handleDeviceAvailabilityChanges();
            }));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    onSettingsChanged(deviceInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.isPreviewing) {
                yield this.showPreviewCamera();
            }
            else {
                this.settingsChanged.emit(deviceInfo);
            }
        });
    }
    showPreviewCamera() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.isPreviewing = true;
            if (this.videoDeviceId !== this.video.selectedId) {
                this.videoDeviceId = this.video.selectedId;
                const videoDevice = this.devices.find(d => d.deviceId === this.video.selectedId);
                yield this.camera.initializePreview(videoDevice);
            }
            return this.camera.tracks;
        });
    }
    hidePreviewCamera() {
        this.isPreviewing = false;
        this.camera.finalizePreview();
        return this.devices.find(d => d.deviceId === this.video.selectedId);
    }
    handleDeviceAvailabilityChanges() {
        if (this.devices && this.devices.length && this.video && this.video.selectedId) {
            let videoDevice = this.devices.find(d => d.deviceId === this.video.selectedId);
            if (!videoDevice) {
                videoDevice = this.devices.find(d => d.kind === 'videoinput');
                if (videoDevice) {
                    this.video.selectedId = videoDevice.deviceId;
                    this.onSettingsChanged(videoDevice);
                }
            }
        }
    }
};
tslib_1.__decorate([
    ViewChild('camera', { static: false })
], SettingsComponent.prototype, "camera", void 0);
tslib_1.__decorate([
    ViewChild('videoSelect', { static: false })
], SettingsComponent.prototype, "video", void 0);
tslib_1.__decorate([
    Input('isPreviewing')
], SettingsComponent.prototype, "isPreviewing", void 0);
tslib_1.__decorate([
    Output()
], SettingsComponent.prototype, "settingsChanged", void 0);
SettingsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-settings',
        styleUrls: ['../css-file/bootstrap4.css'],
        templateUrl: './settings.component.html'
    })
], SettingsComponent);
export { SettingsComponent };
//# sourceMappingURL=settings.component.js.map