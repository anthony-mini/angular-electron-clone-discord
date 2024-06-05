import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../core/services/websocket/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public messages: string[] = [];
  public newMessage: string = '';

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.sendMessage('Success Connection');

    // Fetch existing messages
    // this.websocketService.fetchMessages().subscribe((messages) => {
    //   this.messages = messages;
    // });

    // Subscribe to new messages
    this.websocketService.messages$.subscribe((message) => {
      this.messages.push(message);
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.websocketService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
