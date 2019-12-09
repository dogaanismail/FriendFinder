import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChatGroupService } from 'src/app/services/chat-group/chat-group.service';
import { ChatGroup } from 'src/app/models/chat-group/chat-group';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['../../../../../node_modules/bulma/css/bulma.css',
    '../css-files/css/core.css', '../css-files/css/materialdesignicons.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {

  constructor(private chatGroupService: ChatGroupService) { }

  chatGroups: ChatGroup[];

  ngOnInit() {

    this.chatGroupService.getChatGroups().subscribe((data: any) => {
      this.chatGroups = data.result;
    })
  }

}
