import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { SignedUser } from "../../../models/user/signedUser";
import { SignedUserDetails } from '../../../models/user/signedUserDetails';

/* Rxjs */
import { Observable } from "rxjs";
/* NgRx */
import * as fromUser from "../../../ngrx/selectors/user.selectors";
import * as userActions from "../../../ngrx/actions/user.actions";
import { Store, select } from "@ngrx/store";


@Component({
  selector: "app-settings-password",
  templateUrl: "./settings-password.component.html"
})
export class SettingsPasswordComponent implements OnInit {
  constructor() {}
  
  @Output() onSelected = new EventEmitter<string>();
  @Input() signedUserDetails: SignedUserDetails;

  ngOnInit() {}

  onSetPassword(){
    this.onSelected.emit("Tıklandı");
  }
}
