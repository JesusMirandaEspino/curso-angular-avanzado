import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graph1Component } from './graph1/graph1.component';
import { ProgressComponent } from './progress/progress.component';


const routes: Routes = [

    {
      path:'',
      component: PagesComponent,
      children: [
              {
                path:'dashboard', component: DashboardComponent
              },
              {
                path:'graphic1', component: Graph1Component
              },
              {
                path:'progress', component: ProgressComponent
              },
              {
                path:'', redirectTo: '/dashboard', pathMatch: 'full'
              },
        ]
    },
  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
