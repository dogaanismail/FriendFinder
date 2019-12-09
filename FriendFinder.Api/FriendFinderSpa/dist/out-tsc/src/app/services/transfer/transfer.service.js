import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let TransferService = class TransferService {
    constructor() { }
    setData(data) {
        this.data = data;
    }
    IsNull() {
        return this.data === null ? true : false;
    }
    getData() {
        let temp = this.data;
        this.clearData();
        return temp;
    }
    clearData() {
        this.data = undefined;
    }
};
TransferService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], TransferService);
export { TransferService };
//# sourceMappingURL=transfer.service.js.map