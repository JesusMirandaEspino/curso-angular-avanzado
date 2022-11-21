import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor() {



    this.returnObserver().pipe(
        retry(1)
      ).subscribe( val => console.log(val),
                      error => console.log(error),
                      () => console.log('terminado'));
  }

  ngOnInit(): void {
    // code
  }


  returnObserver():Observable<number>{
    let i = 0;
    const obs$ = new Observable<number>( observer => {

      const intervalor = setInterval( () => {
        i++;
        observer.next(i);

        if( i === 4 ){
          clearInterval(intervalor);
          observer.complete();
        }

        if( i === 2 ){
          i = 0;
          observer.error('error');
        }

        console.log('tick');
      }, 1000);
    });


    return obs$;

  }

}
