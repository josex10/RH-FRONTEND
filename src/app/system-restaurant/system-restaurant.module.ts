import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRestaurantComponent } from './system-restaurant.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './users/users.modules';
import { SystemRestaurantRoutingModule } from './system-restaurant-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProvidersModule } from './providers/providers.module';



@NgModule({
  declarations: [
    SystemRestaurantComponent
  ],
  imports: [
    CommonModule, 
    SystemRestaurantRoutingModule,
    DashboardModule, 
    UserModule, 
    SharedModule,
    ProvidersModule
  ]
})
export class SystemRestaurantModule { }
