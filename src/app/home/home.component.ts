import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from '../core/services/websocket/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public messages: string[] = [];
  public newMessage: string = '';

  constructor(
    private router: Router,
    private websocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    console.log('HomeComponent INIT');

    this.websocketService.sendMessage('Success Connection');
    this.websocketService.onMessage().subscribe((message) => {
      this.messages.push(message);
    });
  }

  // Send Message to the server using the WebsocketService with an input value
  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.websocketService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
