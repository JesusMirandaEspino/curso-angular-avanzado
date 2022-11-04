import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme')

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }


  changeColorTheme(theme: string){

    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute( 'href', url);
    localStorage.setItem('theme', url);
  }


}
