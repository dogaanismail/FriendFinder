import { Component, OnInit, Input } from '@angular/core';
import { SignedUser } from 'src/app/models/user/signedUser';
import { SignedUserDetails } from 'src/app/models/user/signedUserDetails';

@Component({
  selector: 'app-settings-activitiy',
  templateUrl: './settings-activitiy.component.html',
  styleUrls: ['./settings-activitiy.component.css']
})
export class SettingsActivitiyComponent implements OnInit {

  constructor() { }

  @Input() signedUser: SignedUser;
  @Input() signedUserDetails: SignedUserDetails;
  
  ngOnInit() {
    
  }

}
