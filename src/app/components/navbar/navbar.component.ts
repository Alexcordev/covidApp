import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  siteLanguage: string = 'English';
siteLocale: string;

languageList = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' }

];
  constructor() { }

  ngOnInit(): void {
    this.siteLocale = window.location.pathname.split('/')[1];
    this.siteLanguage = this.languageList.find(f => f.code === this.siteLocale).label;
  }

}
