export var PostActionTypes;
(function (PostActionTypes) {
    PostActionTypes["TogglePost"] = "[Post] Toggle Post";
    PostActionTypes["SetCurrentPost"] = "[Post] Set Current Post";
    PostActionTypes["ClearCurrentPost"] = "[Post] Clear Current Post";
    PostActionTypes["InitializeCurrentPost"] = "[Post] Initialize Current Post";
    PostActionTypes["Load"] = "[Post] Load";
    PostActionTypes["LoadSuccess"] = "[Post] Load Success";
    PostActionTypes["LoadFail"] = "[Post] Load Fail";
    PostActionTypes["UpdatePost"] = "[Post] Update Post";
    PostActionTypes["UpdatePostSuccess"] = "[Post] Update Post Success";
    PostActionTypes["UpdatePostFail"] = "[Post] Update Post Fail";
    PostActionTypes["CreatePost"] = "[Post] Create Post";
    PostActionTypes["CreatePostSuccess"] = "[Post] Create Post Success";
    PostActionTypes["CreatePostFail"] = "[Post] Create Post Fail";
    PostActionTypes["DeletePost"] = "[Post] Delete Post";
    PostActionTypes["DeletePostSuccess"] = "[Post] Delete Post Success";
    PostActionTypes["DeletePostFail"] = "[Post] Delete Post Fail";
    PostActionTypes["CreateComment"] = "[Post] Create Comment";
    PostActionTypes["CreateCommentSuccess"] = "[Post] Create Comment Success";
    PostActionTypes["CreateCommentFail"] = "[Post] Create Comment Fail";
})(PostActionTypes || (PostActionTypes = {}));
export class TogglePost {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.TogglePost;
    }
}
export class SetCurrentPost {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.SetCurrentPost;
    }
}
export class ClearCurrentPost {
    constructor() {
        this.type = PostActionTypes.ClearCurrentPost;
    }
}
export class InitializeCurrentPost {
    constructor() {
        this.type = PostActionTypes.InitializeCurrentPost;
    }
}
export class Load {
    constructor() {
        this.type = PostActionTypes.Load;
    }
}
export class LoadSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.LoadSuccess;
    }
}
export class LoadFail {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.LoadFail;
    }
}
export class CreatePost {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.CreatePost;
    }
}
export class CreatePostSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.CreatePostSuccess;
    }
}
export class CreatePostFail {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.CreatePostFail;
    }
}
export class CreateComment {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.CreateComment;
    }
}
export class CreateCommentSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.CreateCommentSuccess;
    }
}
export class CreateCommentFail {
    constructor(payload) {
        this.payload = payload;
        this.type = PostActionTypes.CreateCommentFail;
    }
}
//# sourceMappingURL=post.actions.js.map