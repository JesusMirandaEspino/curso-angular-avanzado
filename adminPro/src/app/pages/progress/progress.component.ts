import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {


  progress1: number = 15;
  progress2: number = 45;


  get getprogressBar1(){
    return `${this.progress1}%`
  }

  get getprogressBar2(){
    return `${this.progress2}%`
  }

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }

}
