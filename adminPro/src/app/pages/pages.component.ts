import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');

  constructor() {
    // code
  }

  ngOnInit(): void {
    const url =  localStorage.getItem('theme') || `./assets/css/colors/default-dark.css`;
    this.linkTheme?.setAttribute( 'href', url);
    localStorage.setItem('theme', url);
  }



}
