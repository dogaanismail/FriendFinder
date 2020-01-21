import { Component, Inject, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { WizardState, PhotoDetails } from '../control-wizard/control-wizard.component';
import { ImageOptions } from '../../../models/gif-maker/image-options';
/* Rxjs */
import { Observable } from 'rxjs';
/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromPost from '../../../ngrx/selectors/post.selectors';
import * as fromUser from '../../../ngrx/selectors/user.selectors';
import * as postActions from '../../../ngrx/actions/post.actions';

@Component({
  selector: 'camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements AfterViewInit {
  @ViewChild('video', { static: false }) videoElement: ElementRef;
  private video: HTMLVideoElement;
  giftUrl: string;
  newPost$: Observable<boolean>;
  errorMessage$: Observable<string>;
  shareReset: boolean;

  @ViewChild('canvas', { static: false }) canvasElement: ElementRef;
  private canvas: HTMLCanvasElement;

  public isPresentingPhotos = false;
  public isTextingLink = false;
  public isTakingPhoto = false;
  public isSharingGif = false;
  public imageWidth = 640;
  public imageHeight = 480;

  constructor(private postStore: Store<fromPost.State>) { }

  ngAfterViewInit(): void {
    if (this.videoElement && this.videoElement.nativeElement) {
      this.video = this.videoElement.nativeElement as HTMLVideoElement;
      if (this.video) {
        this.getMediaStreamPromise({ video: true })
          .then((stream: MediaStream) => this.video.srcObject = stream);

        this.video.height = window.innerHeight;
      }
    }
    if (this.canvasElement && this.canvasElement.nativeElement) {
      this.canvas = this.canvasElement.nativeElement as HTMLCanvasElement;
    }
  }

  ngOnInit(): void {
    this.errorMessage$ = this.postStore.pipe(select(fromPost.getError));
    this.newPost$ = this.postStore.pipe(select(fromPost.getIsNewPost));
  }

  private getMediaStreamPromise(constraints: MediaStreamConstraints): Promise<MediaStream> {
    if (navigator.mediaDevices.getUserMedia) {
      return navigator.mediaDevices.getUserMedia(constraints);
    }

    let getMediaStream = ((
      navigator['webkitGetUserMedia'] ||
      navigator['mozGetUserMedia']) as (c: MediaStreamConstraints) => Promise<MediaStream>
    ).bind(navigator);

    return getMediaStream(constraints);
  }

  public onTakePhoto(details: PhotoDetails): void {
    setTimeout(() => {
      if (this.canvas) {
        const context = this.canvas.getContext('2d');
        if (context) {
          context.drawImage(this.video, 0, 0, this.imageWidth, this.imageHeight);
          const url = this.canvas.toDataURL('image/png');
          localStorage.setItem(`${details.photoCount}.image.png`, url);
        }
      }
    }, details.interval / 2);
  }

  public onStateChanged(state: WizardState): void {
    this.isPresentingPhotos = state === WizardState.PresentingPhotos;
    this.isTextingLink = state === WizardState.TextingLink;
    this.isTakingPhoto = state === WizardState.TakingPhoto;
    this.isSharingGif = state === WizardState.ShareGif;
  }

  public onStateChangedShare(state: WizardState): void {
    this.isPresentingPhotos = state === WizardState.PresentingPhotos;
    this.isTextingLink = state === WizardState.TextingLink;
    this.isTakingPhoto = state === WizardState.TakingPhoto;
    this.isSharingGif = state === WizardState.ShareGif;
    this.ngAfterViewInit();
    this.shareReset = true;
  }

  public onOptionsReceived(imageOptions: ImageOptions): void {
    if (imageOptions) {
      this.imageHeight = imageOptions.imageHeight;
      this.imageWidth = imageOptions.imageWidth;
    }
  }

  public onSentPhotoReceived(giftUrl: string) {
    this.giftUrl = giftUrl;
  }

  public adjustVideoHeight(event): void {
    if (event && this.video) {
      this.video.height = event.target.innerHeight;
    }
  }
}