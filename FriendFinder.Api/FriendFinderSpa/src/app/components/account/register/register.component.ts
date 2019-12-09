import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/user/auth/auth.service";
import { AlertifyService } from 'src/app/services/alertfiy/alertify.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validator,
  FormControl,
  Validators
} from "@angular/forms";
import { RegisterUser } from "../../../models/user/registerUser";

/* NgRx */
import { Store, select } from "@ngrx/store";
import * as fromUser from "../../../ngrx/selectors/user.selectors";
import * as userActions from "../../../ngrx/actions/user.actions";
import { Observable } from "rxjs";


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertifyService: AlertifyService,
    private userStore: Store<fromUser.State>,
    private router: Router,
  ) { }


  registerForm: FormGroup;
  registerUser: RegisterUser;
  birtdate: Date;

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", Validators.required],
        userName: ["", Validators.required],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(12)
          ]
        ],
        rePassword: ["", Validators.required]
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get("password").value === g.get("rePassword").value
      ? null
      : { misMatch: true };
  }

  register() {
    if (this.registerForm.valid) {
      this.registerUser = Object.assign({}, this.registerForm.value);
      this.authService.register(this.registerUser).subscribe((data: any) => {
        if (data.result.status === false) {
          this.alertifyService.error(data.result.message.toString());
          this.userStore.dispatch(new userActions.RegisterFail(data.result.message));
        }
        else {
          this.userStore.dispatch(new userActions.RegisterSuccess(data.result.message));
          this.alertifyService.success("You can login !");
          this.router.navigate(["/account/login"]);
        }
      })
    }
  }
}
