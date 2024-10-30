import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatbotAPIService } from '../service/chatbot-api.service';

@Component({
  selector: 'app-chatbot-ui',
  templateUrl: './chatbot-ui.component.html',
  styleUrl: './chatbot-ui.component.css'
})
export class ChatbotUIComponent {
  chatHistory: { from: string, message: boolean }[] = [];
  userMessage: string = '';

  // chatHistory:any[] = [];
  constructor(private http:HttpClient, private common: ChatbotAPIService){
  }

  ngOnInit(): void {
    this.common.getMessageHistory().subscribe((res)=>{
    
      this.chatHistory=res;
  })
    }
    geminiService : ChatbotAPIService = Inject(ChatbotAPIService)

    sendMessage(): void {
      if (this.userMessage) {
       this.common.sendMessage(this.userMessage.trim());
       this.userMessage ='';
      }

    }

    sendMessageOnEnter(event: KeyboardEvent): void {
      if ( event.key === 'Enter' && !event.shiftKey) {
        this.sendMessage();
       
      }
    }
    

}
