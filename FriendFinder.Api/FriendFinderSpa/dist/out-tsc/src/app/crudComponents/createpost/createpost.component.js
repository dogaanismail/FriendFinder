import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FileUploader } from "ng2-file-upload";
let CreatepostComponent = class CreatepostComponent {
    constructor(editorConfigService, alertifyService, authService, router, postService) {
        this.editorConfigService = editorConfigService;
        this.alertifyService = alertifyService;
        this.authService = authService;
        this.router = router;
        this.postService = postService;
        this.postCreate = {};
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
    createPost() {
        const formData = new FormData();
        if (this.fileData !== null) {
            formData.append("photo", this.fileData);
            formData.append("text", this.postCreate.text);
        }
        if (this.authService.getToken) {
            if (this.fileData !== null) {
                this.postService.createPostWithFile(formData).subscribe((data) => {
                    if (data.result.status === false) {
                        this.alertifyService.error(data.result.message.toString());
                    }
                    else {
                        this.router.navigateByUrl("");
                        this.closePreview();
                        this.alertifyService.success("Post has been just created successully !");
                    }
                });
            }
            else {
                this.postService.createPostWithoutFile(this.postCreate).subscribe((data) => {
                    if (data.result.status === false) {
                        this.alertifyService.error(data.result.message.toString());
                    }
                    else {
                        this.router.navigateByUrl("");
                        this.closePreview();
                        this.alertifyService.success("Post has been just created successully !");
                    }
                });
            }
        }
        else {
            this.alertifyService.error("You are not authorized !");
        }
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
CreatepostComponent = tslib_1.__decorate([
    Component({
        selector: "app-createpost",
        templateUrl: "./createpost.component.html",
        styleUrls: ["./createpost.component.css"]
    })
], CreatepostComponent);
export { CreatepostComponent };
//# sourceMappingURL=createpost.component.js.map