import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SignedUser } from './models/user/signedUser';

/* NgRx */
import * as fromUser from './ngrx/selectors/user.selectors';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {
  title = 'FriendFinder-SPA';
  constructor(
    private router: Router,
    private store: Store<fromUser.State>
  ) { }

  showFooter: boolean = null;
  showHeader: boolean = null;
  signedUser$: Observable<SignedUser>;

  ngOnInit() {
    this.signedUser$ = this.store.pipe(select(fromUser.getSignedUser)) as Observable<SignedUser>;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showFooter = (event.url !== '/account/register')
        this.showHeader = (event.url !== '/account/login')
      }
    });
  }
}
