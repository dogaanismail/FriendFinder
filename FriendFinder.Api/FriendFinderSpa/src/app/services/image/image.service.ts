import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ImageOptions } from '../../models/gif-maker/image-options';
import { Generated } from '../../models/gif-maker/generated';
import { ShareGifModel } from '../../models/gif-maker/share-gif';
import { AuthService } from '../user/auth/auth.service';

@Injectable()
export class ImageService {
  private readonly httpOptions;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
  }

  public getOptions(): Promise<ImageOptions> {
    return this.http.get<ImageOptions>("api/image/options").toPromise();
  }

  public getSharingGif(giftUrl: string): Promise<ShareGifModel> {
    console.log(giftUrl);
    const headers = new HttpHeaders
      ({
        "Authorization": "Bearer " + this.authService.getToken,
        'Content-Type': 'application/json'
      });
    const param = new HttpParams().set('id', giftUrl)
    return this.http.get<ShareGifModel>("api/image/share", { headers: headers, params: param }).toPromise();
  }

  public generateAnimation(phoneNumber: string, images: string[]) {
    let phone =
      phoneNumber && phoneNumber.length > 20
        ? phoneNumber.substring(0, 20)
        : phoneNumber;

    if (phone && phone.length == 10) {
      phone = `1${phone}`;
    }

    return this.http.post<Generated>("api/image/generate", JSON.stringify({ phone, images }),
      this.httpOptions)
      .toPromise();
  }
}