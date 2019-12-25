import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatMessages } from '../../../models/chat/chat-messages';
import { SignedUser } from '../../../models/user/signedUser';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html'
})
export class ChatMessagesComponent implements OnInit {

  constructor() { }
  @Input() messages: ChatMessages[];
  @Input() signedUser: SignedUser;
  @Output() onSendMessage = new EventEmitter<ChatMessages>();
  message = new ChatMessages();
  txtMessage: string = '';

  ngOnInit() {
  }

  sendMsg() {
    if (this.txtMessage) {
      this.message.text = this.txtMessage;
      this.onSendMessage.emit(this.message);
      this.txtMessage = '';
    }
  }
}
