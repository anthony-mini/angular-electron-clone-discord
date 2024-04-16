import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', () => {
      console.log('Connected to the server');
    });
    this.socket.on('message', (message) => {
      console.log('Received message', message);
    });
  }

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  onMessage(): Observable<string> {
    return new Observable((observer: Observer<string>) => {
      this.socket.on('message', (message: string) => observer.next(message));
    });
  }
}
