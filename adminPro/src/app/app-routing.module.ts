import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';
import { PagesRoutingModule } from './pages/pages.rounting';



const routes: Routes = [
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
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
