import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
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
  years: number[];
  days: number[];
  constructor(private formBuilder: FormBuilder) {
    this.years = [];
    this.days = [];
    for (let i = 0; i < 50; ++i) {
      this.years.push(1950 + i);
    }

    for (let a = 1; a <= 31; a++) {
      this.days.push(a);
    }
  }

  basicInfForm: FormGroup;
  signedUserDetail: SignedUserDetails;
  @Input() signedUserDetails: SignedUserDetails;
  @Output() onUpdateBasic = new EventEmitter<SignedUserDetails>();

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.basicInfForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      city: ["", Validators.nullValidator],
      country: ["", Validators.nullValidator],
      aboutMe: ["", Validators.nullValidator]
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
      this.onUpdateBasic.emit(this.signedUserDetail);        
    }
  }
}
