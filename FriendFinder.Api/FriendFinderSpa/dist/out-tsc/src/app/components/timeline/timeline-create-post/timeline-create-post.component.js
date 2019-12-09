import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { FileUploader } from "ng2-file-upload";
import * as postActions from "../../../ngrx/actions/post.actions";
let TimelineCreatePostComponent = class TimelineCreatePostComponent {
    constructor(editorConfigService, store, authService) {
        this.editorConfigService = editorConfigService;
        this.store = store;
        this.authService = authService;
        this.postCreate = {};
        this.errorMessage = "";
        this.editorConfig = {};
        this.fileData = null;
        this.previewUrl = null;
        this.path = "api/post/";
    }
    ngOnInit() {
        this.editorConfig = this.editorConfigService.editorConfig;
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
        this.preview();
    }
    preview() {
        // Show preview
        var mimeType = this.fileData.type;
        if (mimeType.match(/(image|video)\/*/) == null) {
            return;
        }
        if (mimeType.match(/image\/*/)) {
            var reader = new FileReader();
            reader.readAsDataURL(this.fileData);
            reader.onload = _event => {
                this.previewUrl = reader.result;
            };
        }
    }
    checkFileType(data) {
        var type = data.type;
        if (type.match(/image\/*/))
            return "image";
        else
            return "video";
    }
    closePreview() {
        this.fileData = null;
        this.previewUrl = null;
    }
    savePost() {
        let formData = new FormData();
        if (this.fileData != null) {
            let checkedItem = this.checkFileType(this.fileData);
            if (checkedItem === "image")
                formData.append("photo", this.fileData);
            else if (checkedItem === "video")
                formData.append("video", this.fileData);
        }
        formData.append("text", this.postCreate.text);
        this.store.dispatch(new postActions.CreatePost(formData));
        this.postCreate.text = null;
        this.closePreview();
    }
    initiliazeUploader() {
        this.uploader = new FileUploader({
            url: this.path + "addphoto",
            headers: [
                { name: "Authorization", value: "Bearer " + this.authService.getToken }
            ],
            isHTML5: true,
            allowedFileType: ["image"],
            autoUpload: false,
            removeAfterUpload: true,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onSuccessItem = (item, response, status, headers) => {
            if (response) {
                console.log(response);
            }
        };
    }
};
tslib_1.__decorate([
    Input()
], TimelineCreatePostComponent.prototype, "signedUser", void 0);
TimelineCreatePostComponent = tslib_1.__decorate([
    Component({
        selector: "app-timeline-create-post",
        templateUrl: "./timeline-create-post.component.html"
    })
], TimelineCreatePostComponent);
export { TimelineCreatePostComponent };
//# sourceMappingURL=timeline-create-post.component.js.map