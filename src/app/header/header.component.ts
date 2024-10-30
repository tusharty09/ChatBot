import { Component,OnInit,ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
}