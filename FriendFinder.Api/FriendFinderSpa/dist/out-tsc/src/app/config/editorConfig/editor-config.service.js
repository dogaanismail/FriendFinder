import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
let EditorConfigService = class EditorConfigService {
    constructor() {
        this.editorConfig = {
            "editable": true,
            "spellcheck": true,
            "height": "auto",
            "minHeight": "50px",
            "width": "500px",
            "minWidth": "100%",
            "translate": "yes",
            "enableToolbar": false,
            "showToolbar": false,
            "placeholder": "Enter text here...",
            "imageEndPoint": "",
        };
        this.editorConfigForComment = {
            "editable": true,
            "spellcheck": true,
            "height": "auto",
            "minHeight": "50px",
            "width": "450px",
            "minWidth": "100%",
            "translate": "yes",
            "enableToolbar": false,
            "showToolbar": false,
            "placeholder": "Enter text here...",
            "imageEndPoint": "",
        };
    }
};
EditorConfigService = tslib_1.__decorate([
    Injectable()
], EditorConfigService);
export { EditorConfigService };
//# sourceMappingURL=editor-config.service.js.map