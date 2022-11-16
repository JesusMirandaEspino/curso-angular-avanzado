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
    const promesa = new Promise( ( resolve, reject) => {

        if(true){
          resolve('Hola mundo');
        }else{
          reject('Hola')
        }

    });

    promesa.then(() => {
      console.log('termine');
    }).catch(err => console.log(err));

    console.log('fin');
  }

}
