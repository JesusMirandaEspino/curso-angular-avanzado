import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  progress: number = 50;

  get progressBar(){
    return `${this.progress}%`
  }

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }

  changeProgress(value: number) {

    if( this.progress >= 100 && value  >= 0 ) return this.progress = 100;

    if( this.progress <= 0 && value  < 0 ) return this.progress = 0;

    this.progress = this.progress + value;

    return;
  }

}
