import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { ChatMessages } from '../../../models/chat/chat-messages';
import { SignedUser } from '../../../models/user/signedUser';
import { ChatService } from '../../../services/chat/chat.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html'
})
export class ChatMessagesComponent implements OnInit {

  constructor(private _ngZone: NgZone, private _chatService: ChatService) { }

  @Input() messages: ChatMessages[];
  @Input() signedUser: SignedUser;
  @Output() onSendMessage = new EventEmitter<ChatMessages>();
  message = new ChatMessages();
  txtMessage: string = '';

  ngOnInit() {
    this.subscribeToEvents();
  }

  sendMsg() {
    if (this.txtMessage) {
      this.message.text = this.txtMessage;
      this.onSendMessage.emit(this.message);
      this.txtMessage = '';
    }
  }

  private subscribeToEvents(): void {
    this._chatService.messageReceived.subscribe((message: ChatMessages) => {
      this._ngZone.run(() => {
        console.log(message);
        this.messages.push(message);
      });
    });
  }
}
