import { Component, OnInit, Input } from '@angular/core';
import { ChatMessages } from 'src/app/models/chat/chat-messages';
import { SignedUser } from 'src/app/models/user/signedUser';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html'
})
export class ChatMessagesComponent implements OnInit {

  constructor() { }
  @Input() messages: ChatMessages[];
  @Input() signedUser: SignedUser;
  
  ngOnInit() {
  }

}
