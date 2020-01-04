import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../../../models/user/user";
import { Post } from "../../../models/post/post";
import { PostTypeEnum } from '../../../core/enumerations/PostTypeEnum';
import { ModalService } from '../../../services/modal/modal.service';
import { SignedUser } from '../../../models/user/signedUser';
/* Rxjs */
import { map, catchError } from 'rxjs/operators';
/* NgRx */
import * as fromUser from "../../../ngrx/selectors/user.selectors";
import * as fromPost from '../../../ngrx/selectors/post.selectors';
import * as userActions from "../../../ngrx/actions/user.actions";
import * as postActions from './../../../ngrx/actions/post.actions';
import { Observable, throwError } from "rxjs";
import { Store, select } from "@ngrx/store";


@Component({
  selector: "app-profile-album",
  templateUrl: "./profile-album.component.html"
})
export class ProfileAlbumComponent implements OnInit {
  errorMessage: string;
  isNewPhoto$: Observable<boolean>;
  isNewCover$: Observable<boolean>;
  user$: Observable<User>;
  imagePost$: Observable<Post[]>;
  selectedPost: Post;
  signedUser$: Observable<SignedUser>;

  constructor(
    private modalService: ModalService,
    private route: ActivatedRoute,
    private userStore: Store<fromUser.State>
  ) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get("username");
    if (username) {
      this.userStore.dispatch(new userActions.SetCurrentUser(username));
      this.user$ = this.userStore.pipe(select(fromUser.getCurrentUser)) as Observable<User>;

      this.imagePost$ = this.user$.pipe(map((imagePost: any) =>
        imagePost.userPosts.filter((post: Post) => post.postType === PostTypeEnum.PostImage)),
        catchError(this.handleError)) as Observable<Post[]>;

      this.isNewCover$ = this.userStore.pipe(select(fromUser.getIsNewCover));
      this.isNewPhoto$ = this.userStore.pipe(select(fromUser.getIsNewPhoto));
    }
    this.signedUser$ = this.userStore.pipe(select(fromUser.getSignedUser)) as Observable<SignedUser>;
  }

  openModal(id: string, postId: number) {
    this.modalService.open(id);
    this.userStore.dispatch(new postActions.SetCurrentPost(postId));
    this.filledPost();
  }

  filledPost() {
    this.userStore.pipe(select(fromPost.getCurrentPost)).subscribe(
      selectPost => {
        this.selectedPost = selectPost;
      }
    );
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.userStore.dispatch(new postActions.ClearCurrentPost());
  }

  private handleError(err: any) {
    if (err.error instanceof ErrorEvent) {
      this.errorMessage = "`An error occurred";
      console.error(this.errorMessage);
      return throwError(this.errorMessage);
    }
  }
}
