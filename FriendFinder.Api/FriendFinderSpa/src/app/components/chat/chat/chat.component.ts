import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
/*Models*/
import { ChatGroup } from '../../../models/chat-group/chat-group';
import { SignedUser } from '../../../models/user/signedUser';
import { ChatMessages } from '../../../models/chat/chat-messages';
import { MemberDetails } from '../../../models/chat-group/member-details';
/* Rxjs */
import { Observable } from 'rxjs';
/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromUser from '../../../ngrx/selectors/user.selectors';
/* Services */
import { ChatGroupService } from '../../../services/chat-group/chat-group.service';
import { ChatService } from '../../../services/chat/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['../../../../../node_modules/bulma/css/bulma.css', '../css-files/css/chat.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChatComponent implements OnInit {

  constructor(
    private chatGroupService: ChatGroupService,
    private chatService: ChatService,
    private userStore: Store<fromUser.State>,
    private _ngZone: NgZone
  ) {
    this.subscribeToEvents();
  }
  title = "FriendFinderChatting";
  chatGroups: ChatGroup[];
  chatMessages: ChatMessages[];
  showMessages: boolean = false;
  activeChatGroup: ChatGroup;
  signedUser$: Observable<SignedUser>;
  memberDetails: MemberDetails;

  ngOnInit() {
    this.chatGroupService.getChatGroups().subscribe((data: any) => {
      this.chatGroups = data.result;
    });

    this.signedUser$ = this.userStore.pipe(select(fromUser.getSignedUser)) as Observable<SignedUser>;
  }

  groupSelect(groupUser: ChatGroup) {
    this.activeChatGroup = groupUser;
    this.showMessages = true;
    this.chatService.getChatMessages(groupUser.chatGroupName).subscribe((data: any) => {
      this.chatMessages = data.result;
    });

    this.chatGroupService.getMemberDetails(groupUser.chatGroupName).subscribe((data: any) => {
      this.memberDetails = data.result;
    })
  }

  sendPrivateMessage(message: ChatMessages) {
    message.groupName = this.activeChatGroup.chatGroupName;
    message.profilePhotoUrl = this.activeChatGroup.profilePhotoUrl;
    this.chatService.sendMessage(message);
  }

  private subscribeToEvents(): void {
    this.chatService.messageReceived.subscribe((message: ChatMessages) => {
      this._ngZone.run(() => {
        this.chatMessages.push(message);
      });
    });
  }

}
