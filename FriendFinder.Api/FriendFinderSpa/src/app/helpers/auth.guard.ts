import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SignedUser } from '../models/user/signedUser';
/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromUser from '../ngrx/selectors/user.selectors';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private userStore: Store<fromUser.State>,
    ) { }

    signedUser: Observable<SignedUser>;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.userStore.pipe(select(fromUser.getSignedUser)).subscribe((data: any) => {
            this.signedUser = data.result;
        });

        if (this.signedUser) {
            return true;
        }
        else {
            this.router.navigate(['/account/login']);
            return false;
        }
    }
}