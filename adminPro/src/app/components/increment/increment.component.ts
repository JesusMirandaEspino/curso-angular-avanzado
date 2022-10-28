import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.scss']
})
export class IncrementComponent implements OnInit {



  @Input('valor') progress: number = 50;

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();


  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }

  changeProgress(value: number) {

    if( this.progress >= 100 && value  >= 0 ){
      this.valorSalida.emit(100);
      return this.progress = 100;}

    if( this.progress <= 0 && value  < 0 ) {
      this.valorSalida.emit(0);
      return this.progress = 0;}

    this.progress = this.progress + value;
    this.valorSalida.emit(this.progress);
    return
  }

}
