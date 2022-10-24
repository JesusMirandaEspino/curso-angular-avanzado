import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graph1Component } from './pages/graph1/graph1.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';
import { PagesComponent } from './pages/pages.component';


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
    {
      path:'login', component: LoginComponent
    },
    {
      path:'register', component: RegisterComponent
    },
    {
      path:'**', component: NoPagesFoundComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
