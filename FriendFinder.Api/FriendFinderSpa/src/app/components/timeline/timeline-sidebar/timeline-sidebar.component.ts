import { Component, OnInit, Input } from '@angular/core';
import { SignedUser } from 'src/app/models/user/signedUser';

@Component({
  selector: 'app-timeline-sidebar',
  templateUrl: './timeline-sidebar.component.html',
  styleUrls: ['./timeline-sidebar.component.css']
})
export class TimelineSidebarComponent implements OnInit {

  constructor() { }

  @Input() signedUser: SignedUser;

  ngOnInit() {
  }

}
