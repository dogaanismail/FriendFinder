import { Component, OnInit, Input } from '@angular/core';
import { MemberDetails } from '../../../models/chat-group/member-details';

@Component({
  selector: 'app-chat-user-detail',
  templateUrl: './chat-user-detail.component.html'
})
export class ChatUserDetailComponent implements OnInit {

  constructor() { }

  @Input() memberDetails: MemberDetails;

  ngOnInit() {
  }

}
