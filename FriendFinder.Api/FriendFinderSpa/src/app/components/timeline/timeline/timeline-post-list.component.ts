import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Post } from '../../../models/post/post';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { EditorConfigService } from 'src/app/config/editorConfig/editor-config.service';
import { SignedUser } from 'src/app/models/user/signedUser';

/* NgRx */
import { Store } from '@ngrx/store';
import * as fromPost from '../../../ngrx/selectors/post.selectors';
import * as postActions from '../../../ngrx/actions/post.actions';


@Component({
  selector: "app-timeline-post-list",
  templateUrl: "./timeline-post-list.component.html",
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-75%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class TimelinePostListComponent implements OnInit {

  constructor(
    private editorConfigService: EditorConfigService,
    private postStore: Store<fromPost.State>,
  ) { }

  pageTitle = 'Posts';
  commentCreate: any = {};
  commentField: number = 0;
  editorConfig: any = {};
  @Input() errorMessage: string;
  @Input() newPost: boolean;
  @Input() newComment: boolean;
  @Input() posts: Post[];
  @Input() signedUser: SignedUser;

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

  ngOnInit() {
    this.editorConfig = this.editorConfigService.editorConfigForComment;
  }
}
