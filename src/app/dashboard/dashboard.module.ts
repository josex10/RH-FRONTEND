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
import {MatSidenavModule} from '@angular/material/sidenav';

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
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatMenuModule, AppRoutingModule, MatSidenavModule],
  exports: [NavbarComponent],
})
export class DashboardModule {}
