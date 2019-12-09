import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ParticipantsComponent } from './participants/participants.component';
import { CameraComponent } from './camera/camera.component';
import { SettingsComponent } from './settings/settings.component';
import { DeviceSelectComponent } from './settings/device-select.component';
import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';

import { VideoChatService } from '../../services/video-conference/videochat.service';
import { DeviceService } from '../../services/video-conference/device.service';
import { StorageService } from '../../services/video-conference/storage.service';


@NgModule({
    declarations: [
        HomeComponent,
        RoomsComponent,
        ParticipantsComponent,
        CameraComponent,
        SettingsComponent,
        DeviceSelectComponent,
        ActivityIndicatorComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [DeviceService, VideoChatService, StorageService],
})
export class VideoConferenceModule { }
