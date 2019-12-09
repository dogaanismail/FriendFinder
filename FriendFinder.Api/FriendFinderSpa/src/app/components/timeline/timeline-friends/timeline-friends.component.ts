import { Component, OnInit } from '@angular/core';
import { SignedUser } from 'src/app/models/user/signedUser';

/* Rxjs */
import { Observable } from 'rxjs';
/* Ngrx */
import { Store, select } from '@ngrx/store';
import * as fromUser from '../../../ngrx/selectors/user.selectors';

@Component({
  selector: 'app-timeline-friends',
  templateUrl: './timeline-friends.component.html',
  styleUrls: ['./timeline-friends.component.css']
})
export class TimelineFriendsComponent implements OnInit {

  constructor(
    private userStore: Store<fromUser.State>,
  ) { }

  signedUser$: Observable<SignedUser>;

  ngOnInit() {
    this.signedUser$ = this.userStore.pipe(select(fromUser.getSignedUser)) as Observable<SignedUser>;
  }

}
