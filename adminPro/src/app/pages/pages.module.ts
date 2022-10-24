import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    ProgressComponent,
    Graph1Component,
    PagesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProgressComponent,
    Graph1Component,
    PagesComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
