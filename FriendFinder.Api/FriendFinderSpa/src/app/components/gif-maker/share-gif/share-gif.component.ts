import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ImageService } from '../../../services/image/image.service';
import { ShareGifModel } from 'src/app/models/gif-maker/share-gif';
import { AudioComponent } from '../audio/audio.component';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

export enum WizardState {
  Idle,
  CountingDown,
  TakingPhoto,
  PresentingPhotos,
  SendingPhoto,
  TextingLink,
  ShareGif
};

@Component({
  selector: 'share-gif',
  templateUrl: './share-gif.component.html',
  styleUrls: ['./share-gif.component.css']
})
export class ShareGifComponent implements OnInit {

  constructor(private readonly imageService: ImageService,
    private router: Router
  ) { }

  giftUrl: string;
  public state: WizardState = WizardState.ShareGif;
  @Input() getGiftModel: string;
  @Output() stateChangeShare = new EventEmitter<WizardState>();

  ngOnInit() {
    this.getUrl();
  }

  getUrl() {
    this.imageService.getSharingGif(this.getGiftModel).then((result: any) => {
      this.giftUrl = result.gifUrl;
    })
  }

  private changeState(state: WizardState): void {
    this.stateChangeShare.emit(this.state = state);
  }

  public async reset(sound: AudioComponent) {
    if (sound) {
      await sound.play();
    }
    this.changeState(WizardState.TakingPhoto);
    this.stateChangeShare.emit(WizardState.TakingPhoto);
  }

  public async goBack(sound: AudioComponent) {
    if (sound) {
      await sound.play();
    }
    window.location.reload();
  }

  onFacebookClick() {
    return this.parseMetaTagsAndShare('https://www.facebook.com/sharer/sharer.php?u=',
      {
        u: window.location.href
      });
  }

  parseMetaTagsAndShare(baseShareUrl, metaTags) {
    const queryParams = "http://localhost:49221/gif-maker/home";
    return this.sharePost(`${baseShareUrl}?${queryParams}`);
  }

  getQueryParams(metaTags) {
    let queryParams = '';
    if (metaTags) {
      queryParams =
        Object.entries(metaTags).map( ([key, metaTag]) : string =>
          metaTag
            ? `${key}=${encodeURIComponent(metaTag as any)}`
            : ''
        ).join('&');
    }
    return queryParams;
  }

  getParamValueQueryString(paramName) {
    const url = window.location.href;
    let paramValue;
    if (url.includes('?')) {
      const httpParams = new HttpParams({ fromString: url.split('?')[1] });
      paramValue = httpParams.get(paramName);
    }
    return paramValue;
  }

  getMetaContent(key, attr) {
    const metaTag = document.querySelector(`meta[${attr}="${key}"]`);
    return metaTag ? metaTag.getAttribute('content') : undefined;
  }

  getWindowSize(width, height) {
    return `width=${width}, height=${height}`;
  }

  sharePost(url: string) {
    return window.open(url, 'newwindow', this.getWindowSize(800, 500));
  }

  onTwitterClick() {
    return this.parseMetaTagsAndShare('https://twitter.com/intent/tweet',
      {
        url: window.location.href,
        text: this.getMetaContent('og:description', 'property'),
        hashtags: this.getMetaContent('twitter:hashtags', 'name'),
        via: this.getMetaContent('twitter:site', 'name')
      });
  }

  onLinkedinClick() {
    return this.parseMetaTagsAndShare('http://www.linkedin.com/shareArticle',
      {
        url: window.location.href,
        title: this.getMetaContent('og:title', 'property'),
        summary: this.getMetaContent('og:description', 'property'),
        tags: this.getMetaContent('twitter:hashtags', 'name')
      });
  }

  onRedditClick() {
    return this.parseMetaTagsAndShare('http://www.reddit.com/submit',
      {
        url: window.location.href
      });
  }

  onPinterestClick() {
    return this.parseMetaTagsAndShare('http://pinterest.com/pin/create/button',
      {
        url: window.location.href,
        description: this.getMetaContent('og:description', 'property'),
        media: this.getMetaContent('og:image', 'property')
      });
  }

  onTumblrClick() {
    return this.parseMetaTagsAndShare('https://www.tumblr.com/widgets/share/tool',
      {
        canonicalUrl: window.location.href,
        title: this.getMetaContent('og:title', 'property'),
        caption: this.getMetaContent('og:description', 'property')
      });
  }

}
