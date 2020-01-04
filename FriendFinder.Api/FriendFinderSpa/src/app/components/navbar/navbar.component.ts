import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SignedUser } from 'src/app/models/user/signedUser';
import { AuthService } from 'src/app/services/user/auth/auth.service';
import * as fromUser from '../../ngrx/selectors/user.selectors';
import * as userActions from '../../ngrx/actions/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private userStore: Store<fromUser.State>,
    private router: Router) 
  { }

  @Input() signedUser: SignedUser;

  ngOnInit() {
  }

  signOut() {
    this.userStore.dispatch(new userActions.Logout());
    this.router.navigate(["account/login"]);
  }

}
