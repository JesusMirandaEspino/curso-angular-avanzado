import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-pages-found',
  templateUrl: './no-pages-found.component.html',
  styleUrls: ['./no-pages-found.component.scss']
})
export class NoPagesFoundComponent implements OnInit {

  currentYear = new Date().getFullYear();

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }

}
