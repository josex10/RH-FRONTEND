import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRestaurantComponent } from './system-restaurant.component';
import { UserModule } from './users/users.modules';
import { SystemRestaurantRoutingModule } from './system-restaurant-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProvidersModule } from './providers/providers.module';
import { ComponentsModule } from './components/components.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RestaurantModule } from './restaurant/restaurant.module';
import { InventoryModule } from './inventory/inventory.module';
import { ReportsModule } from './reports/reports.module';
import { AdministrationModule } from './administration/administration.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';




@NgModule({
  declarations: [
    SystemRestaurantComponent
  ],
  imports: [
    CommonModule, 
    SystemRestaurantRoutingModule,
    UserModule, 
    SharedModule,
    ProvidersModule,
    ComponentsModule,
    MatSidenavModule,
    RestaurantModule,
    InventoryModule,
    ReportsModule,
    AdministrationModule,
    ProfileModule,
    SettingsModule
  ]
})
export class SystemRestaurantModule { }
