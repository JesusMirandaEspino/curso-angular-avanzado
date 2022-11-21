import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import {  filter, map, retry, take } from 'rxjs/operators';

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
                      () => console.log('terminado')
      );


    this.returnInterval().subscribe( resp => console.log(resp),)

  }

  ngOnInit(): void {
    // code
  }

  returnInterval():Observable<number>{
    return  interval(1000).pipe(
      map( valor => valor + 1),
      filter(valor => (valor % 2 === 0) ? true : false),
      take(10)
    );
  }

  returnObserver():Observable<number>{
    let i = 0;
    return new Observable<number>( observer => {

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

  }

}
