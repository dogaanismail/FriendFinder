import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
let PostListComponent = class PostListComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
        this.postService.getPostList().subscribe((data) => {
            this.postList = data.result;
            console.log(data.result);
            console.log(this.postList);
        });
    }
};
PostListComponent = tslib_1.__decorate([
    Component({
        selector: "app-post-list",
        templateUrl: "./post-list.component.html",
        styleUrls: ["./post-list.component.css"]
    })
], PostListComponent);
export { PostListComponent };
//# sourceMappingURL=post-list.component.js.map