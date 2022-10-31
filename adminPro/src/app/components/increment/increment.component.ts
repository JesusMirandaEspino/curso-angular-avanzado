import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.scss']
})
export class IncrementComponent implements OnInit {



  @Input('valor') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();


  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
    this.btnClass = `btn ${this.btnClass}`
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


  onChanges(event: number){

    if( event >= 100) {
      this.progress = 100;
    }else if( event <= 0 ){
      this.progress = 0;
    }else{
      this.progress = event
    }


    this.valorSalida.emit(event);
  }

}
