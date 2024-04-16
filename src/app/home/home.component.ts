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

  constructor(
    private router: Router,
    private websocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    console.log('HomeComponent INIT');

    this.websocketService.sendMessage('Hello from the client! 1');
    this.websocketService.sendMessage('Hello from the client! 2');
    this.websocketService.sendMessage('Hello from the client! 3');
    this.websocketService.onMessage().subscribe((message) => {
      this.messages.push(message);
    });
  }
}
