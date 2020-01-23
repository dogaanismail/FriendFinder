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
import * as fromChat from '../../../ngrx/selectors/chat.selectors';
import * as chatActions from '../../../ngrx/actions/chat.actions';
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
    private chatStore: Store<fromChat.State>,
    private userStore: Store<fromUser.State>,
  ) { }
  title = "FriendFinderChatting";
  chatGroups$: Observable<ChatGroup[]>;
  chatMessages$: Observable<ChatMessages[]>;
  showMessages: boolean = false;
  activeChatGroup: ChatGroup;
  signedUser$: Observable<SignedUser>;
  memberDetails$: Observable<MemberDetails>;
  loading$: Observable<boolean>;

  ngOnInit() {
    this.chatStore.dispatch(new chatActions.LoadChatbox());
    this.chatGroups$ = this.chatStore.pipe(select(fromChat.getChatGroups)) as Observable<ChatGroup[]>;
    this.signedUser$ = this.userStore.pipe(select(fromUser.getSignedUser)) as Observable<SignedUser>;
    this.loading$ = this.chatStore.pipe(select(fromChat.getLoading)) as Observable<boolean>;
  }

  groupSelect(groupUser: ChatGroup) {
    this.activeChatGroup = groupUser;
    this.showMessages = true;
    /* Loading Chat Messages */
    this.chatStore.dispatch(new chatActions.LoadMessages(groupUser.chatGroupName));
    this.chatMessages$ = this.chatStore.pipe(select(fromChat.getChatMessages)) as Observable<ChatMessages[]>;
    /* Loading Member Details */
    this.chatStore.dispatch(new chatActions.LoadMemberDetail(groupUser.chatGroupName));
    this.memberDetails$ = this.chatStore.pipe(select(fromChat.getMemberDetails)) as Observable<MemberDetails>;
  }

  sendPrivateMessage(message: ChatMessages) {
    message.groupName = this.activeChatGroup.chatGroupName;
    message.profilePhotoUrl = this.activeChatGroup.profilePhotoUrl;
    this.chatService.sendMessage(message);
  }
}
