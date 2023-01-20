import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantHelperBannerComponent } from '../components/restaurant-helper-banner/restaurant-helper-banner.component';
import { ProvidersCreateComponent } from './pages/providers-create/providers-create.component';
import { ProvidersEditComponent } from './pages/providers-edit/providers-edit.component';
import { ProvidersComponent } from './pages/providers.component';

const routes: Routes = [
    { path: '', 
      component: ProvidersComponent,
      children: [
        { path: 'create', component: ProvidersCreateComponent},
        { path: 'edit/:id', component: ProvidersEditComponent},
        { path: 'rh', component: RestaurantHelperBannerComponent},
        { path: '**', redirectTo: 'rh' }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvidersRoutingModule { }