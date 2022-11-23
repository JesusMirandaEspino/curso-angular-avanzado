import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graph1Component } from './graph1/graph1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [

    {
      path:'dashboard',
      component: PagesComponent,
      children: [
              {
                path:'', component: DashboardComponent, data: { titulo: 'Dashboard' }
              },
              {
                path:'graphic1', component: Graph1Component, data: { titulo: 'Graficos' }
              },
              {
                path:'progress', component: ProgressComponent, data: { titulo: 'Progreso' }
              },
              {
                path:'accountSettings', component: AccountSettingsComponent, data: { titulo: 'Settings' }
              },
              {
                path:'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }
              },
              {
                path:'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs' }
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
