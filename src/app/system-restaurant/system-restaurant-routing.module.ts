import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration/pages/administration.component';
import { ClientsComponent } from './clients/pages/clients.component';
import { IngredientsComponent } from './ingredients/pages/ingredients.component';
import { InventoryComponent } from './inventory/pages/inventory.component';
import { ProductsComponent } from './products/pages/products.component';
import { ProfileComponent } from './profile/pages/profile.component';
import { ReportsComponent } from './reports/pages/reports.component';
import { RestaurantComponent } from './restaurant/pages/restaurant.component';
import { SettingsComponent } from './settings/pages/settings.component';
import { SystemRestaurantComponent } from './system-restaurant.component';

const routes: Routes = [
    { path: 'v1', 
      component: SystemRestaurantComponent,
      children: [
        { 
          path: 'providers',
          loadChildren: () => import('./providers/providers.module').then( m => m.ProvidersModule )
        },
        { path: 'restaurant', component: RestaurantComponent},
        { path: 'clients', component: ClientsComponent},
        { path: 'ingredients', component: IngredientsComponent},
        { path: 'products', component: ProductsComponent},
        { path: 'inventory', component: InventoryComponent},
        { path: 'reports', component: ReportsComponent},
        { path: 'administration', component: AdministrationComponent},
        { path: 'profile', component: ProfileComponent},
        { path: 'settings', component: SettingsComponent},
        { path: '**', redirectTo: 'restaurant' }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRestaurantRoutingModule { }