import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
class IdGenerator {
    static getNext() {
        return ++IdGenerator.id;
    }
}
IdGenerator.id = 0;
let DeviceSelectComponent = class DeviceSelectComponent {
    constructor(storageService) {
        this.storageService = storageService;
        this.localDevices = [];
        this.settingsChanged = new EventEmitter();
        this.id = `device-select-${IdGenerator.getNext()}`;
    }
    get devices() {
        return this.localDevices;
    }
    set devices(devices) {
        this.selectedId = this.getOrAdd(this.key, this.localDevices = devices);
    }
    onSettingsChanged(deviceId) {
        this.setAndEmitSelections(this.key, this.selectedId = deviceId);
    }
    getOrAdd(key, devices) {
        const existingId = this.storageService.get(key);
        if (devices && devices.length > 0) {
            const defaultDevice = devices.find(d => d.deviceId === existingId) || devices[0];
            this.storageService.set(key, defaultDevice.deviceId);
            return defaultDevice.deviceId;
        }
        else {
            this.message = "A camero or video device can not be found ! ";
        }
        return null;
    }
    setAndEmitSelections(key, deviceId) {
        this.storageService.set(key, deviceId);
        this.settingsChanged.emit(this.devices.find(d => d.deviceId === deviceId));
    }
};
tslib_1.__decorate([
    Input()
], DeviceSelectComponent.prototype, "label", void 0);
tslib_1.__decorate([
    Input()
], DeviceSelectComponent.prototype, "kind", void 0);
tslib_1.__decorate([
    Input()
], DeviceSelectComponent.prototype, "key", void 0);
tslib_1.__decorate([
    Input()
], DeviceSelectComponent.prototype, "devices", null);
tslib_1.__decorate([
    Output()
], DeviceSelectComponent.prototype, "settingsChanged", void 0);
DeviceSelectComponent = tslib_1.__decorate([
    Component({
        selector: 'app-device-select',
        templateUrl: './device-select.component.html',
        styleUrls: ['../css-file/bootstrap4.css'],
    })
], DeviceSelectComponent);
export { DeviceSelectComponent };
//# sourceMappingURL=device-select.component.js.map