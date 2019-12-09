import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
let DeviceService = class DeviceService {
    constructor() {
        this.deviceBroadcast = new ReplaySubject();
        if (navigator && navigator.mediaDevices) {
            navigator.mediaDevices.ondevicechange = (_) => {
                this.deviceBroadcast.next(this.getDeviceOptions());
            };
        }
        this.$devicesUpdated = this.deviceBroadcast.asObservable();
        this.deviceBroadcast.next(this.getDeviceOptions());
    }
    isGrantedMediaPermissions() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (navigator && navigator.userAgent && navigator.userAgent.indexOf('Chrome') > 0) {
                return true; // Follows standard workflow for non-Chrome browsers.
            }
            if (navigator && navigator['permissions']) {
                try {
                    const result = yield navigator['permissions'].query({ name: 'camera' });
                    if (result) {
                        if (result.state === 'granted') {
                            return true;
                        }
                        else {
                            const isGranted = yield new Promise(resolve => {
                                result.onchange = (_) => {
                                    const granted = _.target['state'] === 'granted';
                                    if (granted) {
                                        resolve(true);
                                    }
                                };
                            });
                            return isGranted;
                        }
                    }
                }
                catch (e) {
                    // This is only currently supported in Chrome.
                    // https://stackoverflow.com/a/53155894/2410379
                    return true;
                }
            }
            return false;
        });
    }
    getDeviceOptions() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const isGranted = yield this.isGrantedMediaPermissions();
            if (navigator && navigator.mediaDevices && isGranted) {
                let devices = yield this.tryGetDevices();
                if (devices.every(d => !d.label)) {
                    devices = yield this.tryGetDevices();
                }
                return devices;
            }
            return null;
        });
    }
    tryGetDevices() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const mediaDevices = yield navigator.mediaDevices.enumerateDevices();
            const devices = ['audioinput', 'audiooutput', 'videoinput'].reduce((options, kind) => {
                return options[kind] = mediaDevices.filter(device => device.kind === kind);
            }, []);
            return devices;
        });
    }
};
DeviceService = tslib_1.__decorate([
    Injectable()
], DeviceService);
export { DeviceService };
//# sourceMappingURL=device.service.js.map