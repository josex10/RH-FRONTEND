import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'public',
    loadChildren: () => import('./system-public/public.module').then( m => m.PublicModule )
  },
  { 
    path: 'system-restaurant',
    loadChildren: () => import('./system-restaurant/system-restaurant.module').then( m => m.SystemRestaurantModule )
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
