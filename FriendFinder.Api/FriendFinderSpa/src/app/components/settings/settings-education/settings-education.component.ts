import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SignedUserDetails } from '../../../models/user/signedUserDetails';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-settings-education",
  templateUrl: "./settings-education.component.html"
})

export class SettingsEducationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  educationForm: FormGroup;
  workExpForm: FormGroup;
  @Input() signedUserDetails: SignedUserDetails;
  updatedData: SignedUserDetails;
  @Output() onUpdateEducation = new EventEmitter<SignedUserDetails>();
  @Output() onUpdateExperience = new EventEmitter<SignedUserDetails>();

  ngOnInit() {
    this.createEducationForm();
    this.createExperienceForm();
    this.updatedData = Object.assign({}, this.signedUserDetails);
  }

  createEducationForm() {
    this.educationForm = this.formBuilder.group({
      universityName: ["", Validators.required],
      universityDesc: ["", Validators.required],
      hasGraduated: ["", Validators.required]
    });
  }

  createExperienceForm() {
    this.workExpForm = this.formBuilder.group({
      companyName: ["", Validators.required],
      designation: ["", Validators.required]
    });
  }

  updateEducationDetails() {
    if (this.educationForm.valid) {
      this.updatedData.universityName = this.educationForm.value.universityName;
      this.updatedData.universityDesc = this.educationForm.value.universityDesc;
      this.updatedData.hasGraduated = this.educationForm.value.hasGraduated;
      this.onUpdateEducation.emit(this.updatedData);
    }
  }

  updateExperienceDetails() {
    if (this.workExpForm.valid) {
      this.updatedData.companyName = this.workExpForm.value.companyName;
      this.updatedData.designation = this.workExpForm.value.designation;
      this.onUpdateExperience.emit(this.updatedData);
    }
  }
}
