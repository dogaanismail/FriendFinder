import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../user/auth/auth.service';
import { ChatGroup } from '../../models/chat-group/chat-group';
import { tap, shareReplay, catchError } from 'rxjs/operators';
import { ChatMessages } from '../../models/chat/chat-messages';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatUrl = 'api/chat/';
  private chatHubUrl = 'chatHub';
  messageReceived = new EventEmitter<ChatMessages>();
  connectionEstablished = new EventEmitter<Boolean>();

  private connectionIsEstablished = false;
  private _hubConnection: HubConnection;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
  }

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

  sendMessage(message: ChatMessages) {
    this._hubConnection.invoke('PrivateMessage', message);
  }

  private createConnection() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(this.chatHubUrl)
      .build();
  }

  private startConnection(): void {
    this._hubConnection.start().then(() => {
      this.connectionIsEstablished = true;
      console.log('Hub connection started');
      this.connectionEstablished.emit(true);
    })
      .catch(err => {
        console.log('Error while establishing connection, retrying...');
        setTimeout(function () { this.startConnection(); }, 5000);
      });
  }

  private registerOnServerEvents(): void {
    this._hubConnection.on('ReceiveMessage', (data: any) => {
      this.messageReceived.emit(data);
    });
  }
}
