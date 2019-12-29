import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { SignedUserDetails } from "../../../models/user/signedUserDetails";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
  @Input() signedUserDetails: SignedUserDetails;
  @Output() onUpdateBasic = new EventEmitter<SignedUserDetails>();
  updatedData: SignedUserDetails;

  ngOnInit() {
    this.createUpdateForm();
    this.updatedData = Object.assign({}, this.signedUserDetails);
  }

  createUpdateForm() {
    this.basicInfForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      city: [null, Validators.required],
      country: [null, Validators.required],
      aboutMe: [null, Validators.required]
    });
  }

  updateInformations() {
    if (this.basicInfForm.valid) {
      this.updatedData.firstName = this.basicInfForm.value.firstName;
      this.updatedData.lastName = this.basicInfForm.value.lastName;
      this.updatedData.email = this.basicInfForm.value.email;
      this.updatedData.city = this.basicInfForm.value.city;
      this.updatedData.country = this.basicInfForm.value.country;
      this.updatedData.aboutMe = this.basicInfForm.value.aboutMe;
      this.onUpdateBasic.emit(this.updatedData);
    }
  }
}
