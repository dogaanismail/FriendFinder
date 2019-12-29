import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { SignedUserDetails } from '../../../models/user/signedUserDetails';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ChangePassword } from '../../../models/user/changePassword';

@Component({
  selector: "app-settings-password",
  templateUrl: "./settings-password.component.html"
})
export class SettingsPasswordComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  @Input() signedUserDetails: SignedUserDetails;
  @Output() onUpdatePassword = new EventEmitter<ChangePassword>();
  changePassForm: FormGroup;
  passworData: ChangePassword;

  ngOnInit() {
    this.createPasswordForm();
  }

  createPasswordForm() {
    this.changePassForm = this.formBuilder.group(
      {
        oldPassword: ["", Validators.required],
        newPassword: [
          "",
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(12)
          ]
        ],
        confirmPassword: ["", Validators.required]
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get("newPassword").value === g.get("confirmPassword").value
      ? null
      : { misMatch: true };
  }

  updatePassword() {
    if (this.changePassForm.valid) {
      this.passworData = Object.assign({}, this.changePassForm.value);
      this.onUpdatePassword.emit(this.passworData);
    }
  }
}
