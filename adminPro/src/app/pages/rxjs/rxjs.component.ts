import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor() {
    const obs$ = new Observable( observer => {
      let i = 0;
      const intervalor = setInterval( () => {
        i++;
        observer.next(i);

        if( i === 4 ){
          clearInterval(intervalor);
          observer.complete();
        }

        console.log('tick');
      }, 1000);
    });

    obs$.subscribe( val => console.log(val),
                    error => console.log(error),
                    () => console.log('terminado'));
  }

  ngOnInit(): void {
    // code
  }

}
