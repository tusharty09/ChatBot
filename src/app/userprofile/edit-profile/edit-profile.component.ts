import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit{
  userProfile: any;
  name:string='';
  phone:string='';
  bio:string='';
  location:string='';
  email:string='';
  constructor(private router: Router){}

  ngOnInit(): void {
    this.userProfile = history.state.data;
    this.populateForm();
  }

  onSubmit(){
     alert("Profile Updated");
    this.router.navigate(['userprofile']);
  
  }
  populateForm(): void {
    console.warn("11111111111111111111", this.userProfile)
    this.name = this.userProfile.profile.name;
    this.email = this.userProfile.contact.email;
    this.location = this.userProfile.contact.location;
    this.bio = this.userProfile.profile.bio;
    this.phone = this.userProfile.contact.phone;
  }

}
