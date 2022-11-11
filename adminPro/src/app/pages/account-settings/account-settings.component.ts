import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/settings.service';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');

  constructor(private settingsService: SettingsService) {
    // code
  }

  ngOnInit(): void {
    // code
  }


  changeColorTheme(theme: string){
    this.settingsService.changeColorTheme(theme);
  }


}
