import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AudioComponent } from '../audio/audio.component';
import { ImageOptions } from '../../../models/gif-maker/image-options';
import { ImageService } from '../../../services/image/image.service';
import { Generated } from '../../../models/gif-maker/generated';
import { ShareGifModel } from '../../../models/gif-maker/share-gif';
import { defaultDialogConfig } from 'src/app/core/configs/dialog-configs/default-dialog-config';
import { MatDialog } from '@angular/material';
import { CreateGifComponent } from 'src/app/common/components/dialogs/create-gif/create-gif.component';
import { ModalService } from '../../../services/modal/modal.service';

export enum WizardState {
  Idle,
  CountingDown,
  TakingPhoto,
  PresentingPhotos,
  SendingPhoto,
  TextingLink,
  ShareGif
};

export interface PhotoDetails {
  photoCount: number;
  interval: number;
};

@Component({
  selector: 'control-wizard',
  templateUrl: './control-wizard.component.html',
  styleUrls: ['./control-wizard.component.css']
})
export class ControlWizardComponent implements OnInit {
  @Output() takePhoto = new EventEmitter<PhotoDetails>();
  @Output() stateChange = new EventEmitter<WizardState>();
  @Output() optionsReceived = new EventEmitter<ImageOptions>();
  @Output() sentPhotoReceived = new EventEmitter<string>();
  @Output() openGifModal = new EventEmitter<string>();
  @Input() fullReset: string;

  public get isIdle(): boolean {
    return this.state === WizardState.Idle;
  }

  public get isCountingDown(): boolean {
    return this.state === WizardState.CountingDown;
  }

  public get isTakingPhoto(): boolean {
    return this.state === WizardState.TakingPhoto;
  }

  public get isPresentingPhotos(): boolean {
    return this.state === WizardState.PresentingPhotos;
  }

  public get isTextingLink(): boolean {
    return this.state === WizardState.TextingLink;
  }

  public get isSharingGif(): boolean {
    return this.state === WizardState.ShareGif;
  }

  public get gridClasses(): any {
    return {
      'grid-start': this.isIdle,
      'grid-countdown': this.isCountingDown,
      'grid-taking-photo': this.isTakingPhoto,
      'grid-texting-link': this.isTextingLink,
      'grid-presenting-photos': this.isPresentingPhotos
    }
  }

  public isSending = false;

  public state: WizardState = WizardState.Idle;
  public photoCountDown: number;
  public images: string[] = [];
  public animationIndex: number = 0;
  public phoneNumber: string = '+90 (531) 812 42 37';
  public sentPhotoId: string;
  public giftUrl: string;

  private countDownTimer: NodeJS.Timer;
  private animationTimer: NodeJS.Timer;
  private imageOptions: ImageOptions;
  private photosTaken: number = 0;

  constructor(private readonly imageService: ImageService, private modalService: ModalService) { }

  async ngOnInit() {
    this.imageOptions = await this.imageService.getOptions();
    this.optionsReceived.emit(this.imageOptions);
    this.photoCountDown = this.imageOptions.photoCountDownDefault;
  }

  private changeState(state: WizardState): void {
    this.stateChange.emit(this.state = state);
  }

  public async start(sound: AudioComponent) {
    if (sound) {
      await sound.play();
    }
    this.changeState(WizardState.CountingDown);
    this.resetCountDownTimer();
  }

  public async reset(sound: AudioComponent) {
    if (sound) {
      await sound.play();
    }
    this.changeState(WizardState.Idle);
    this.photosTaken = 0;
    this.phoneNumber = '+90 (531) 812 42 37';
    this.photoCountDown = this.imageOptions.photoCountDownDefault;
    this.stopCountDownTimer();
    this.stopAnimationTimer();
  }

  public async generate(sound: AudioComponent) {
    if (sound) {
      await sound.play();
    }
    if (this.phoneNumber && this.images && this.images.length) {
      this.isSending = true;
      const id =
        await this.imageService
          .generateAnimation(this.phoneNumber, this.images)
          .then((result: any) => {
            this.isSending = false;
            this.sentPhotoId = result.id;
            this.giftUrl = result.url;
          });
      this.sentPhotoReceived.emit(this.sentPhotoId)
    }
  }

  public async send(sound: AudioComponent) {
    if (sound) {
      await sound.play();
    }
    this.changeState(WizardState.TextingLink);
  }

  share(sound: AudioComponent, modalId: string) {
    if (sound) {
      sound.play();
    }
    this.modalService.open(modalId);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  public onPhoneNumberChanged(number: string): void {
    this.phoneNumber = number;
  }

  private resetCountDownTimer(): void {
    this.stopCountDownTimer();
    this.startCountDownTimer();
  }

  private startCountDownTimer(): void {
    this.countDownTimer =
      setInterval(
        () => {
          if (this.photosTaken < this.imageOptions.photosToTake) {
            if (this.photoCountDown === 1) {
              this.photoCountDown = this.imageOptions.photoCountDownDefault + 1;
              this.changeState(WizardState.TakingPhoto);
              const details = {
                photoCount: this.photosTaken,
                interval: this.imageOptions.intervalBetweenCountDown
              };
              this.takePhoto.emit(details);
              ++this.photosTaken;
            } else {
              this.changeState(WizardState.CountingDown);
              --this.photoCountDown;
            }
          } else {
            this.stopCountDownTimer();
            this.images = [];
            for (let i = 0; i < this.imageOptions.photosToTake; ++i) {
              this.images.push(localStorage.getItem(`${i}.image.png`));
            }
            this.startAnimationTimer();
            this.changeState(WizardState.PresentingPhotos);
            this.photoCountDown = this.imageOptions.photoCountDownDefault;
          }
        },
        this.imageOptions.intervalBetweenCountDown);
  }

  private startAnimationTimer(): void {
    this.stopAnimationTimer();
    this.animationTimer =
      setInterval(() => {
        const index = (this.animationIndex + 1);
        if (index >= this.images.length) {
          this.animationIndex = 0;
        } else {
          this.animationIndex = index;
        }
      }, this.imageOptions.animationFrameDelay);
  }

  private stopAnimationTimer(): void {
    if (this.animationTimer) {
      clearInterval(this.animationTimer);
    }
  }

  private stopCountDownTimer(): void {
    this.images = [];
    if (this.countDownTimer) {
      clearInterval(this.countDownTimer);
    }
  }

}
