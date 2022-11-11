import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  linkTheme = document.querySelector('#theme');
  linksThemes = document.querySelectorAll('.selector');

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
    this.chekCurrentSeleted();
  }


  changeColorTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute( 'href', url);
    localStorage.setItem('theme', url);
  }

  chekCurrentSeleted(){


    this.linksThemes.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeLink = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if(btnThemeLink == currentTheme) element.classList.add('working');

    }
      );
  }

}
