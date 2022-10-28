import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  @Input() progressBar: string = '0%'

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }



}
