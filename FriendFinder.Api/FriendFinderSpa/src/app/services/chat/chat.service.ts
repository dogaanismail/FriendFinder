import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../user/auth/auth.service';
import { ChatGroup } from 'src/app/models/chat-group/chat-group';
import { tap, shareReplay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatUrl = 'api/chat/';

  constructor(
    private http: HttpClient,
    private authService: AuthService) { }

  getChatMessages(groupName: string): Observable<ChatGroup[]> {
    const headers = new HttpHeaders
      ({
        "Authorization": "Bearer " + this.authService.getToken,
        'Content-Type': 'application/json'
      });
    const param = new HttpParams().set('groupName', groupName)
    return this.http.get<ChatGroup[]>(this.chatUrl + "getgroupmessages", { headers: headers, params: param, })
      .pipe(
        tap(),
        shareReplay(1),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
