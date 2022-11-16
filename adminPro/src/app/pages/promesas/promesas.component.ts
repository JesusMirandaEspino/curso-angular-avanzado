import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
    const promesa = new Promise( () => {
      console.log('Hola mundo');
    });
    console.log('fin')
  }

}
