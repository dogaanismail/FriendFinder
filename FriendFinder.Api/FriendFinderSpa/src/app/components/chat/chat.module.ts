import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
import { ChatUserDetailComponent } from './chat-user-detail/chat-user-detail.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { ChatCreateMessageComponent } from './chat-create-message/chat-create-message.component';
import { SharedModule } from '../../shared/shared.module';

const chatRoutes: Routes = [
    { path: "chat", component: ChatComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(chatRoutes)
    ],
    declarations: [
        ChatComponent,
        ChatHeaderComponent,
        ChatSidebarComponent,
        ChatUserDetailComponent,
        ChatMessagesComponent,
        ChatCreateMessageComponent
    ]
})
export class ChatModule { }
