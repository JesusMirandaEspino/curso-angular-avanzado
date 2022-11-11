import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');
  public linksThemes: any;

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
    this.linksThemes = document.querySelectorAll('.selector');
    this.chekCurrentSeleted();
  }


  changeColorTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute( 'href', url);
    localStorage.setItem('theme', url);
  }

  chekCurrentSeleted(){


    this.linksThemes.forEach((element:any) => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeLink = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if(btnThemeLink == currentTheme) element.classList.add('working');

    }
      );
  }

}
