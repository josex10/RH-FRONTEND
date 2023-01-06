import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/pages/dashboard.component';
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