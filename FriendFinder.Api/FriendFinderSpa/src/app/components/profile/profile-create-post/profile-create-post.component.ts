import { Component, OnInit, Input } from "@angular/core";
import { EditorConfigService } from '../../../core/configs/editor-configs/editor-config.service';
import { AuthService } from "../../../services/user/auth/auth.service";
import { FileUploader } from "ng2-file-upload";
import { Post } from "src/app/models/post/post";
import { OrderPipe } from "ngx-order-pipe";
import { SignedUser } from 'src/app/models/user/signedUser';
/* NgRx */
import { Store } from "@ngrx/store";
import * as fromPost from "../../../ngrx/selectors/post.selectors";
import * as postActions from "../../../ngrx/actions/post.actions";


@Component({
  selector: "app-profile-create-post",
  templateUrl: "./profile-create-post.component.html"
})
export class ProfileCreatePostComponent implements OnInit {
  constructor(
    private editorConfigService: EditorConfigService,
    private postStore: Store<fromPost.State>,
    private authService: AuthService,
    private orderPipe: OrderPipe
  ) { }

  post: Post;
  postCreate: any = {};
  errorMessage = "";
  editorConfig: any = {};
  fileData: File = null;
  previewUrl: any = null;
  uploadedFilePath: string = null;
  uploader: FileUploader;
  path = "api/post/";
  savedPost: Post;
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
    this.postStore.dispatch(new postActions.CreatePost(formData));
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
