import { Component, OnInit, Input } from '@angular/core';
import { SignedUser } from 'src/app/models/user/signedUser';
/* Rxjs */
import { Observable } from 'rxjs';
/* NgRx */
import * as fromUser from '../../../ngrx/selectors/user.selectors';
import * as userActions from '../../../ngrx/actions/user.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-settings-navbar',
  templateUrl: './settings-navbar.component.html'
})
export class SettingsNavbarComponent implements OnInit {

  constructor(
    private userStore: Store<fromUser.State>
  ) { }

  @Input() newPhoto: boolean;
  @Input() newCover: boolean;
  @Input() signedUser: SignedUser;
  profilePhotoData: File = null;
  coverPhotoData: File = null;

  ngOnInit() {
  }

  changeCover(fileInput: any) {
    let formData = new FormData();
    this.coverPhotoData = <File>fileInput.target.files[0];
    if (this.coverPhotoData != null) {
      formData.append("coverphoto", this.coverPhotoData);
    }
    this.userStore.dispatch(new userActions.ChangeCoverPhoto(formData));
  }

  changeProfile(fileInput: any) {
    let formData = new FormData();
    this.profilePhotoData = <File>fileInput.target.files[0];
    if (this.profilePhotoData != null) {
      formData.append("profilephoto", this.profilePhotoData);
    }
    this.userStore.dispatch(new userActions.ChangeProfilePhoto(formData));
  }

}
