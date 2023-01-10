import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ProvidersComponent } from './pages/providers.component';



@NgModule({
  declarations: [
    ProvidersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProvidersModule { }