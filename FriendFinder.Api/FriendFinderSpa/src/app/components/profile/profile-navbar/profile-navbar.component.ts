import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { SignedUser } from 'src/app/models/user/signedUser';
/* NgRx */
import { Store } from '@ngrx/store';
import * as fromUser from '../../../ngrx/selectors/user.selectors';
import * as userActions from '../../../ngrx/actions/user.actions';

@Component({
  selector: 'app-profile-navbar',
  templateUrl: './profile-navbar.component.html'
})
export class ProfileNavbarComponent implements OnInit {

  constructor(
    private userStore: Store<fromUser.State>
    ) { }

  profilePhotoData: File = null;
  coverPhotoData: File = null;

  @Input() user: User;
  @Input() newPhoto: boolean;
  @Input() newCover: boolean;
  @Input() signedUser: SignedUser;

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
