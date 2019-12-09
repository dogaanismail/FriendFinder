import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SignedUser } from 'src/app/models/user/signedUser';
import { AuthService } from 'src/app/services/user/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @Input() signedUser: SignedUser;

  ngOnInit() {
  }

}
