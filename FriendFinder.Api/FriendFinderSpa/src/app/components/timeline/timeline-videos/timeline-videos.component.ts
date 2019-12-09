import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post/post';
import { ModalService } from 'src/app/services/modal/modal.service';
import { PostTypeEnum } from 'src/app/core/enumerations/PostTypeEnum';
import { EditorConfigService } from 'src/app/config/editorConfig/editor-config.service';
import { SignedUser } from 'src/app/models/user/signedUser';
/* Rxjs */
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/* Ngrx */
import { Store, select } from '@ngrx/store';
import * as fromPost from '../../../ngrx/selectors/post.selectors';
import * as postActions from './../../../ngrx/actions/post.actions';
import * as fromUser from '../../../ngrx/selectors/user.selectors';

@Component({
  selector: 'app-timeline-videos',
  templateUrl: './timeline-videos.component.html'
})
export class TimelineVideosComponent implements OnInit {

  videoPost$: Observable<Post[]>;
  errorMessage$: Observable<string>;
  selectedPost: Post;
  commentCreate: any = {};
  commentField: number = 0;
  editorConfig: any = {};
  signedUser$: Observable<SignedUser>;

  constructor(
    private postStore: Store<fromPost.State>,
    private userStore: Store<fromUser.State>,
    private modalService: ModalService,
    private editorConfigService: EditorConfigService,
  ) { }

  ngOnInit() {
    this.editorConfig = this.editorConfigService.editorConfigForComment;
    this.videoPost$ = this.postStore.pipe(select(fromPost.getPosts)) as Observable<Post[]>;
    this.videoPost$ = this.videoPost$.pipe(map(videoPost =>
      videoPost.filter(x => x.postType === PostTypeEnum.PostVideo)));
    this.errorMessage$ = this.postStore.pipe(select(fromPost.getError));
    this.signedUser$ = this.userStore.pipe(select(fromUser.getSignedUser)) as Observable<SignedUser>;
  }

  openModal(id: string, postId: number) {
    this.modalService.open(id);
    this.postStore.dispatch(new postActions.SetCurrentPost(postId));
    this.filledPost();
  }


  filledPost() {
    this.postStore.pipe(select(fromPost.getCurrentPost)).subscribe(
      selectPost => {
        this.selectedPost = selectPost;
      }
    );
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.postStore.dispatch(new postActions.ClearCurrentPost());
  }

  getCommentField(postId: number) {
    this.commentField = postId;
  }

  closeCommentField() {
    this.commentField = 0;
  }

  saveComment(postId: number) {
    this.commentCreate.postId = postId;
    this.postStore.dispatch(new postActions.CreateComment(this.commentCreate));
    this.commentField = 0;
    this.commentCreate = {};
  }

}
