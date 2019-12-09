import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let StorageService = class StorageService {
    get(key) {
        return localStorage.getItem(this.formatAppStorageKey(key));
    }
    set(key, value) {
        if (value && value !== 'null') {
            localStorage.setItem(this.formatAppStorageKey(key), value);
        }
    }
    remove(key) {
        localStorage.removeItem(this.formatAppStorageKey(key));
    }
    formatAppStorageKey(key) {
        return `FriendFinder.videoChat.${key}`;
    }
};
StorageService = tslib_1.__decorate([
    Injectable()
], StorageService);
export { StorageService };
//# sourceMappingURL=storage.service.js.map