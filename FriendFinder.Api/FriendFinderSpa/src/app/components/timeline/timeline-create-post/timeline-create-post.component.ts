import { Component, OnInit, Input } from "@angular/core";
import { EditorConfigService } from "../../../config/editorConfig/editor-config.service";
import { AuthService } from "../../../services/user/auth/auth.service";
import { FileUploader } from "ng2-file-upload";
import { Post } from "src/app/models/post/post";
import { SignedUser } from 'src/app/models/user/signedUser';

/* NgRx */
import { Store, select } from "@ngrx/store";
import * as fromPost from "../../../ngrx/selectors/post.selectors";
import * as postActions from "../../../ngrx/actions/post.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-timeline-create-post",
  templateUrl: "./timeline-create-post.component.html"
})
export class TimelineCreatePostComponent implements OnInit {
  constructor(
    private editorConfigService: EditorConfigService,
    private postStore: Store<fromPost.State>,
    private authService: AuthService
  ) { }

  postCreate: any = {};
  errorMessage = "";
  editorConfig: any = {};
  fileData: File = null;
  previewUrl: any = null;
  uploader: FileUploader;
  path = "api/post/";
  newPost$: Observable<boolean>;
  @Input() signedUser: SignedUser;

  ngOnInit() {
    this.editorConfig = this.editorConfigService.editorConfig;
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
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

  checkFileType(data: File) {
    var type = data.type;
    if (type.match(/image\/*/)) return "image";
    else return "video";
  }

  closePreview() {
    this.fileData = null;
    this.previewUrl = null;
  }

  savePost() {
    let formData = new FormData();
    if (this.fileData != null) {
      let checkedItem = this.checkFileType(this.fileData);
      if (checkedItem === "image") formData.append("photo", this.fileData);
      else if (checkedItem === "video") formData.append("video", this.fileData);
    }
    formData.append("text", this.postCreate.text);
    this.postStore.dispatch(new postActions.CreatePost(formData));
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
}
