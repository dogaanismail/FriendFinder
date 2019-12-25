import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatMessages } from '../../../models/chat/chat-messages';
import { SignedUser } from '../../../models/user/signedUser';
import { Message } from '../../../models/chat/message';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html'
})
export class ChatMessagesComponent implements OnInit {

  constructor() { }
  title = "FriendFinderChatting";
  @Input() messages: ChatMessages[];
  @Input() signedUser: SignedUser;
  @Output() onSendMessage = new EventEmitter<Message>();
  message = new Message();
  txtMessage: string = '';

  ngOnInit() {
  }

  sendMsg() {
    if (this.txtMessage) {
      this.message.message = this.txtMessage;
      this.onSendMessage.emit(this.message);
    }
  }
}
