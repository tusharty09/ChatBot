import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChatbotAPIService {
  private generativeAI:GoogleGenerativeAI;
  private messageHistory: BehaviorSubject<any> = new BehaviorSubject<any[]>([]);

  constructor(private http:HttpClient) { 
    this.generativeAI = new GoogleGenerativeAI('AIzaSyAy7JGRohylrgZbdRTJnffn9pofdQLMLpA');
  }
  
  async sendMessage(message: string){
   const model = this.generativeAI.getGenerativeModel({model:'gemini-pro'});
   const currentHistory = this.messageHistory.value;
   this.messageHistory.next([...currentHistory, { from: 'user', message }]);
  
   const result = await model.generateContent(message);
   const response = await result.response;
   const text = response.text();
   console.log(text);
  this.messageHistory.next([...this.messageHistory.value, { from: 'bot', message: text }]);
  }


public getMessageHistory():Observable<any>{
  return this.messageHistory.asObservable();
}

}
