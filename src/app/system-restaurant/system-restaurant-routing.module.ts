import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/pages/clients.component';
import { DashboardComponent } from './dashboard/pages/dashboard.component';
import { IngredientsComponent } from './ingredients/pages/ingredients.component';
import { ProductsComponent } from './products/pages/products.component';
import { ProvidersComponent } from './providers/pages/providers.component';
import { SystemRestaurantComponent } from './system-restaurant.component';
import { UsersComponent } from './users/pages/users.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: '', 
        component: SystemRestaurantComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent},
          { path: 'users', component: UsersComponent},
          { path: 'clients', component: ClientsComponent},
          { path: 'providers', component: ProvidersComponent},
          { path: 'ingredients', component: IngredientsComponent},
          { path: 'products', component: ProductsComponent},
          { path: '**', redirectTo: 'dashboard' }
        ]
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRestaurantRoutingModule { }