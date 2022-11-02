import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment/increment.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';


@NgModule({
  declarations: [
    IncrementComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IncrementComponent
  ]
})
export class ComponentsModule { }
