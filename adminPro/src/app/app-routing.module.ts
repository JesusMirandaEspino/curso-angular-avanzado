import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';
import { PagesRoutingModule } from './pages/pages.routing';



const routes: Routes = [
    {
      path:'**', component: NoPagesFoundComponent
    },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
