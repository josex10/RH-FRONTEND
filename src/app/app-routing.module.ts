import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
} from './dashboard/pages';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'sales', component: SalesComponent },
  { path: '', redirectTo: 'restaurant', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
