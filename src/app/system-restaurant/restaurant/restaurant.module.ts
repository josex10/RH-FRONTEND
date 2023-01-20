import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './pages/restaurant.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    RestaurantComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    ComponentsModule
  ]
})
export class RestaurantModule { }
