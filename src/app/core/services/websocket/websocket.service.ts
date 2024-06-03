import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket: Socket;
  private messageSubject: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', () => {
      console.log('Connected to the server');
    });
    this.socket.on('message', (message: string) => {
      this.messageSubject.next(message);
    });
  }

  // fetchMessages(): Observable<string[]> {
  //   return this.http.get<string[]>('http://localhost:3000/messages');
  // }

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  get messages$(): Observable<string> {
    return this.messageSubject.asObservable();
  }
}
