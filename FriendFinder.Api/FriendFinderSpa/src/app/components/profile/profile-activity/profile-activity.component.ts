import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/models/user/user";

@Component({
  selector: "app-profile-activity",
  templateUrl: "./profile-activity.component.html"
})
export class ProfileActivityComponent implements OnInit {
  constructor() {}

  @Input() user: User;

  ngOnInit() {}
}
