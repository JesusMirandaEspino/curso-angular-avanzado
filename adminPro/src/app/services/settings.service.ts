import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

    private linkTheme = document.querySelector('#theme');

  constructor() {
    const url =  localStorage.getItem('theme') || `./assets/css/colors/default-dark.css`;
    this.linkTheme?.setAttribute( 'href', url);
    localStorage.setItem('theme', url);
  }


  changeColorTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute( 'href', url);
    localStorage.setItem('theme', url);
    this.chekCurrentSeleted();
  }


  chekCurrentSeleted(){
    const linksThemes = document.querySelectorAll('.selector');
      linksThemes.forEach((element:any) => {
        element.classList.remove('working');
        const btnTheme = element.getAttribute('data-theme');
        const btnThemeLink = `./assets/css/colors/${btnTheme}.css`;
        const currentTheme = this.linkTheme?.getAttribute('href');

        if(btnThemeLink == currentTheme) element.classList.add('working');

      });
  }


}
