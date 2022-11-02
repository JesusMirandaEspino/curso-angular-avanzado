import { Component, OnInit, Output } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.scss']
})
export class Graph1Component implements OnInit {

// Doughnut
  @Output() doughnutChartLabels1: string[] = [ 'Sales', 'Sold', 'No sure'];
  @Output() doughnutChartData1: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels1,
    datasets: [
      { data: [ 350, 450, 100 ],
      backgroundColor: ['#00821C','#09DB36','#024D0F'],
      hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
      hoverBorderColor:['#000000','#000000','#00000003']
      },

    ]
  };


// Doughnut
  @Output() doughnutChartLabels2: string[] = [ 'Download', 'Update', 'Fixed'];
  @Output() doughnutChartData2: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels1,
    datasets: [
      { data: [ 450, 350, 100 ],
      backgroundColor: ['#003482','#091edb','#02164d'],
      hoverBackgroundColor: ['#003482','#091edb','#02164d'],
      hoverBorderColor:['#000000','#000000','#00000003']
      },

    ]
  };


// Doughnut
  @Output() doughnutChartLabels3: string[] = [ 'A', 'B', 'C'];
  @Output() doughnutChartData3: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels1,
    datasets: [
      { data: [ 100, 450, 350],
      backgroundColor: ['#00821C','#09DB36','#024D0F'],
      hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
      hoverBorderColor:['#000000','#000000','#00000003']
      },

    ]
  };


  // Doughnut
  @Output() doughnutChartLabels4: string[] = [ 'Download Sales'];
  @Output() doughnutChartData4: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels1,
    datasets: [
      { data: [ 350, 100, 450 ],
      backgroundColor: ['#003482','#091edb','#02164d'],
      hoverBackgroundColor: ['#003482','#091edb','#02164d'],
      hoverBorderColor:['#000000','#000000','#00000003']
      },

    ]
  };





  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }


}
