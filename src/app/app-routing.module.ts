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
  { 
    path: 'public',
    loadChildren: () => import('./public/public.module').then( m => m.PublicModule )
  },
  {
    path: '**',
    redirectTo: 'public'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
