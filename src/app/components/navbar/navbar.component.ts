import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  localesList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' }
  ]

  constructor() { }

  ngOnInit(): void {


  }







}




