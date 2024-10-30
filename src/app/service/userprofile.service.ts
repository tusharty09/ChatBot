import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  private data = {
    profile: {
      name: "Tushar Tyagi",
      bio: "A brief bio about the user goes here.",
      jobTitle: "Frontend Engineer Intern",
      company: "Pinnacle Way",
      avatarSrc: "assets/images/back.jpg"
    },
    contact: {
      email: "tushartyagi@123gmail.com",
      phone: "+91 9910573727",
      location: "Gurugram, India"
    }
  };

  constructor() { }

  getUserProfile(): Observable<any>{
    return of(this.data);
}
}