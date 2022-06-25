/**
 * @description: Imports from angular core
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

/**
 * @description: Imports form angular material
 */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

/**
 * @description: Imports from pages
 */
import {
  LoginComponent,
  RestaurantComponent,
  ReportsComponent,
  ExpensesComponent,
  ProductsComponent,
  ClientsComponent,
  ProvidersComponent,
  ConfigurationComponent,
  SalesComponent,
} from './pages';

/**
 * @description: Imports from components
 */

import { FormLoginComponent, NavbarComponent } from './components';

@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    NavbarComponent,
    RestaurantComponent,
    ReportsComponent,
    ExpensesComponent,
    ProductsComponent,
    ClientsComponent,
    ProvidersComponent,
    ConfigurationComponent,
    SalesComponent,
  ],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatMenuModule, AppRoutingModule],
  exports: [NavbarComponent],
})
export class DashboardModule {}
