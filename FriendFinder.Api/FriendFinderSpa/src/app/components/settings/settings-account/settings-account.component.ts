import { Component, OnInit } from '@angular/core';
import { SignedUser } from '../../../models/user/signedUser';
/* Rxjs */
import { Observable } from 'rxjs';
/* NgRx */
import * as fromUser from '../../../ngrx/selectors/user.selectors';
import * as userActions from '../../../ngrx/actions/user.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-settings-account',
  templateUrl: './settings-account.component.html'
})
export class SettingsAccountComponent implements OnInit {

  constructor(
    private userStore: Store<fromUser.State>
  ) { }

  signedUser$: Observable<SignedUser>;
  isNewPhoto$: Observable<boolean>;
  isNewCover$: Observable<boolean>;

  ngOnInit() {
    this.signedUser$ = this.userStore.pipe(select(fromUser.getSignedUser)) as Observable<SignedUser>;
    this.isNewCover$ = this.userStore.pipe(select(fromUser.getIsNewCover));
    this.isNewPhoto$ = this.userStore.pipe(select(fromUser.getIsNewPhoto));
  }

}
