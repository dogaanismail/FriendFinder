import { Component, OnInit, Input } from "@angular/core";
import { SignedUserDetails } from "../../../models/user/signedUserDetails";
/* Rxjs */
import { Observable } from "rxjs";
/* NgRx */
import * as fromUserAccounts from "../../../ngrx/selectors/user-account.selector";
import * as userActions from "../../../ngrx/actions/user.actions";
import { Store, select } from "@ngrx/store";

import {
  FormBuilder,
  FormGroup,
  Validator,
  FormControl,
  Validators
} from "@angular/forms";
import { UserService } from "../../../services/user/detail/user.service";

@Component({
  selector: "app-settings-information",
  templateUrl: "./settings-information.component.html"
})
export class SettingsInformationComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  basicInfForm: FormGroup;
  signedUserDetail: SignedUserDetails;
  @Input() signedUserDetails: SignedUserDetails;

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.basicInfForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      city: ["", Validators.min(5)],
      country: ["", Validators.min(5)],
      aboutMe: ["", Validators.min(5)]
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get("password").value === g.get("rePassword").value
      ? null
      : { misMatch: true };
  }

  updateInformations() {
    if (this.basicInfForm.valid) {
      this.signedUserDetail = Object.assign({}, this.basicInfForm.value);
      //effect To do
    }
  }
}
