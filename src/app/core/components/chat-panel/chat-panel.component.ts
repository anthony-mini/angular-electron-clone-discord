import { NgFor } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-panel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './chat-panel.component.html',
  styleUrl: './chat-panel.component.scss',
})
export class ChatPanelComponent {
  @Output() conversationSelected = new EventEmitter<string>();

  conversations = [
    { name: 'General', id: '1' },
    { name: 'Technology', id: '2' },
    { name: 'Gaming', id: '3' },
  ];

  selectConversation(conversation: any) {
    this.conversationSelected.emit(conversation.id);
  }
}
