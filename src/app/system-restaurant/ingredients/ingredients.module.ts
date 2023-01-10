import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { IngredientsComponent } from './pages/ingredients.component';



@NgModule({
  declarations: [
    IngredientsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class IngredientsModule { }