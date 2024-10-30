import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserprofileService } from '../service/userprofile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent implements OnInit{
  userProfile: any;

  constructor(private router: Router,private userProfileService: UserprofileService) {}

  ngOnInit(): void {
    this.userProfileService.getUserProfile().subscribe(data => {
      this.userProfile = data;
    });
    }

  navigateToEditProfile(): void {
    this.router.navigate(['editProfile'],{ state: { data: this.userProfile } });
  }

  navigateToSettings(): void {
    this.router.navigate(['/helpComp']);
  }
}
