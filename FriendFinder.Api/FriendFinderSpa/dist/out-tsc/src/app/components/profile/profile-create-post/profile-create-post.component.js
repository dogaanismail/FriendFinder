import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FileUploader } from "ng2-file-upload";
import * as postActions from "../../../ngrx/actions/post.actions";
let ProfileCreatePostComponent = class ProfileCreatePostComponent {
    constructor(editorConfigService, store, authService, orderPipe) {
        this.editorConfigService = editorConfigService;
        this.store = store;
        this.authService = authService;
        this.orderPipe = orderPipe;
        this.postCreate = {};
        this.errorMessage = "";
        this.editorConfig = {};
        this.fileData = null;
        this.previewUrl = null;
        this.uploadedFilePath = null;
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
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = _event => {
            this.previewUrl = reader.result;
        };
    }
    closePreview() {
        this.fileData = null;
        this.previewUrl = null;
    }
    savePost() {
        let formData = new FormData();
        if (this.fileData !== null) {
            formData.append("photo", this.fileData);
            formData.append("text", this.postCreate.text);
        }
        this.store.dispatch(new postActions.CreatePost(formData));
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
ProfileCreatePostComponent = tslib_1.__decorate([
    Component({
        selector: "app-profile-create-post",
        templateUrl: "./profile-create-post.component.html"
    })
], ProfileCreatePostComponent);
export { ProfileCreatePostComponent };
//# sourceMappingURL=profile-create-post.component.js.map