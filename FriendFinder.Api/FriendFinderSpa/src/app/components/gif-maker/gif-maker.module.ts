import { NgModule } from '@angular/core';
import { ImageService } from '../../services/image/image.service';
import { AudioComponent } from './audio/audio.component';
import { CameraComponent } from './camera/camera.component';
import { ControlWizardComponent } from './control-wizard/control-wizard.component';
import { NumberPadComponent } from './number-pad/number-pad.component';
import { PhoneNumberPipe } from '../../core/pipes/phone-number.pipe';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        AudioComponent,
        CameraComponent,
        ControlWizardComponent,
        NumberPadComponent,
        PhoneNumberPipe
    ],
    imports: [
        SharedModule
    ],
    providers: [ImageService],
})
export class GifMakerModule { }
