import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }


  changeColorTheme(theme: string){
    const linkTheme = document.querySelector('#theme');
    const url = `./assets/css/colors/${theme}.css`;
    linkTheme?.setAttribute( 'href', url);
    localStorage.setItem('theme', url);
  }


}
