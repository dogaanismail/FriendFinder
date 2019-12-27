import { Component, OnInit, Input } from "@angular/core";
import { SignedUser } from "../../../models/user/signedUser";
import { SignedUserDetails } from '../../../models/user/signedUserDetails';
/* Rxjs */
import { Observable } from "rxjs";
/* NgRx */
import * as fromUser from "../../../ngrx/selectors/user.selectors";
import * as userActions from "../../../ngrx/actions/user.actions";
import { Store, select } from "@ngrx/store";


@Component({
  selector: "app-settings-education",
  templateUrl: "./settings-education.component.html"
})
export class SettingsEducationComponent implements OnInit {
  constructor() {}

  @Input() signedUserDetails: SignedUserDetails;

  ngOnInit() {
    console.log(this.signedUserDetails);
  }
}
