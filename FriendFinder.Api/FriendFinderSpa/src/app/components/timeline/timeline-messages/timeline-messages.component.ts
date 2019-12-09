import { Component, OnInit } from '@angular/core';
import { SignedUser } from 'src/app/models/user/signedUser';
/* Rxjs */
import { Observable } from 'rxjs';
/* Ngrx */
import { Store, select } from '@ngrx/store';
import * as fromUser from '../../../ngrx/selectors/user.selectors';

@Component({
  selector: 'app-timeline-messages',
  templateUrl: './timeline-messages.component.html',
  styleUrls: ['./timeline-messages.component.css']
})
export class TimelineMessagesComponent implements OnInit {

  constructor(private userStore: Store<fromUser.State>) { }

  signedUser$: Observable<SignedUser>;

  ngOnInit() {
    this.signedUser$ = this.userStore.pipe(select(fromUser.getSignedUser)) as Observable<SignedUser>;
  }

}
