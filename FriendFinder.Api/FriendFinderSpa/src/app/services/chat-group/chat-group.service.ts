import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../user/auth/auth.service';
import { ChatGroup } from '../../models/chat-group/chat-group';
import { tap, shareReplay, catchError } from 'rxjs/operators';
import { MemberDetails } from '../../models/chat-group/member-details';

@Injectable({
  providedIn: 'root'
})
export class ChatGroupService {

  private chatGroupUrl = 'api/chatgroup/';

  constructor(
    private http: HttpClient,
    private authService: AuthService) { }


  getChatGroups(): Observable<ChatGroup[]> {
    const headers = new HttpHeaders
      ({
        "Authorization": "Bearer " + this.authService.getToken,
        'Content-Type': 'application/json'
      });

    return this.http.get<ChatGroup[]>(this.chatGroupUrl + "getchatgroups", { headers: headers })
      .pipe(
        tap(),
        shareReplay(1),
        catchError(this.handleError)
      );
  }

  getMemberDetails(groupName: string): Observable<MemberDetails> {
    const headers = new HttpHeaders
      ({
        "Authorization": "Bearer " + this.authService.getToken,
        'Content-Type': 'application/json'
      });
    const param = new HttpParams().set('groupName', groupName)
    return this.http.get<MemberDetails>(this.chatGroupUrl + "getmemberdetails", { headers: headers, params: param, })
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
