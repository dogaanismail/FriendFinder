import { Component, OnInit, Input } from '@angular/core';
import { SignedUser } from 'src/app/models/user/signedUser';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html'
})
export class ChatHeaderComponent implements OnInit {

  constructor() { }
  @Input() signedUser: SignedUser;

  ngOnInit() {
    console.log(this.signedUser);
  }

}
