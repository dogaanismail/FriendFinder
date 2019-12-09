export var GlobalErrorActionTypes;
(function (GlobalErrorActionTypes) {
    GlobalErrorActionTypes["CreateGlobalError"] = "[GlobalError] GlobalError Create";
})(GlobalErrorActionTypes || (GlobalErrorActionTypes = {}));
export class CreateGlobalError {
    constructor(payload) {
        this.payload = payload;
        this.type = GlobalErrorActionTypes.CreateGlobalError;
    }
}
//# sourceMappingURL=global-error.actions.js.map