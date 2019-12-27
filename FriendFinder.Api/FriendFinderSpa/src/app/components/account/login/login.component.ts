import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/user/auth/auth.service";
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertfiy/alertify.service';

/* NgRx */
import { Store, select } from "@ngrx/store";
import * as fromUser from "../../../ngrx/selectors/user.selectors";
import * as userActions from "../../../ngrx/actions/user.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService,
    private router: Router,
    private userStore: Store<fromUser.State>) { }

  loginUser: any = {};

  ngOnInit() { }

  login() {
    this.authService.login(this.loginUser).subscribe((data: any) => {
      if (data.result.status === false) {
        this.alertifyService.error(data.result.message.toString());
        this.userStore.dispatch(new userActions.LoginFail(data.result.message));
      } else {
        this.userStore.dispatch(new userActions.LoginSuccess(data.result));
        this.authService.saveToken(data.result.refreshToken.toString());
        this.alertifyService.success("You have entered successfully !");
        this.router.navigate(["/"]);
      }
    })
  }

  logOut() {
    this.authService.logOut()
  }
}
