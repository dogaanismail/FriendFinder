import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatGroup } from 'src/app/models/chat-group/chat-group';


@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html'
})
export class ChatSidebarComponent implements OnInit {

  constructor() { }

  @Input() groupUsers: ChatGroup[];
  @Output() onGroupSelect = new EventEmitter<ChatGroup>();
  ngOnInit() {
  }

  selectUser(user: ChatGroup) {
    this.onGroupSelect.emit(user);
  }

}
