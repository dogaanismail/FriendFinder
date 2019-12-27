import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Post } from '../../../models/post/post';
import { SignedUser } from 'src/app/models/user/signedUser';
/* Rxjs */
import { Observable } from 'rxjs';
/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromPost from '../../../ngrx/selectors/post.selectors';
import * as fromUser from '../../../ngrx/selectors/user.selectors';
import * as postActions from '../../../ngrx/actions/post.actions';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent implements OnInit {
  errorMessage$: Observable<string>;
  componentActive = true;
  posts$: Observable<Post[]>;
  newPost$: Observable<boolean>;
  newComment$: Observable<boolean>;
  signedUser$: Observable<SignedUser>;

  constructor(
    private postStore: Store<fromPost.State>,
    private userStore: Store<fromUser.State>
  ) { }

  ngOnInit(): void {
    this.postStore.dispatch(new postActions.Load());
    this.posts$ = this.postStore.pipe(select(fromPost.getPosts)) as Observable<Post[]>;
    this.errorMessage$ = this.postStore.pipe(select(fromPost.getError));
    this.newPost$ = this.postStore.pipe(select(fromPost.getIsNewPost));
    this.newComment$ = this.postStore.pipe(select(fromPost.getIsNewComment));
    this.signedUser$ = this.userStore.pipe(select(fromUser.getSignedUser)) as Observable<SignedUser>;
  }
}
