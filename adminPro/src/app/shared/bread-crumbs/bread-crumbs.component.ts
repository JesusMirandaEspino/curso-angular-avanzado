import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit {

  constructor( private router: Router) {
    this.router.events.subscribe( event => {
      console.log(  event );
    });
  }

  ngOnInit(): void {
    // code
  }

}
