import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/*Models*/
import { ChatGroup } from '../../../models/chat-group/chat-group';
import { SignedUser } from '../../../models/user/signedUser';
import { ChatMessages } from '../../../models/chat/chat-messages';
/* Rxjs */
import { Observable } from 'rxjs';
/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromUser from '../../../ngrx/selectors/user.selectors';
/* Services */
import { ChatGroupService } from 'src/app/services/chat-group/chat-group.service';
import { ChatService } from 'src/app/services/chat/chat.service';
/* SignalR */
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['../../../../../node_modules/bulma/css/bulma.css','../css-files/css/chat.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChatComponent implements OnInit {

  constructor(
    private chatGroupService: ChatGroupService,
    private chatService: ChatService,
    private userStore: Store<fromUser.State>,
  ) { }

  chatGroups: ChatGroup[];
  chatMessages: ChatMessages[];
  showMessages: boolean = false;
  signedUser$: Observable<SignedUser>;

  ngOnInit() {
    this.chatGroupService.getChatGroups().subscribe((data: any) => {
      this.chatGroups = data.result;
    });

    this.signedUser$ = this.userStore.pipe(select(fromUser.getSignedUser)) as Observable<SignedUser>;
  }

  groupSelect(groupUser: ChatGroup) {
    this.showMessages = true;
    this.chatService.getChatMessages(groupUser.chatGroupName).subscribe((data: any) => {
      this.chatMessages = data.result;
    });
  }

}
