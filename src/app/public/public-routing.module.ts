import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/pages/contact/contact.component';
import { FeaturesComponent } from './features/pages/features/features.component';
import { HomeComponent } from './home/pages/home/home.component';
import { LoginComponent } from './login/pages/login/login.component';
import { PricingComponent } from './pricing/pages/pricing/pricing.component';
import { PublicComponent } from './public.component';
import { RegisterComponent } from './register/pages/register/register.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: '', 
        component: PublicComponent,
        children: [
          { path: 'contact', component: ContactComponent},
          { path: 'feature', component: FeaturesComponent},
          { path: 'home', component: HomeComponent},
          { path: 'login', component: LoginComponent},
          { path: 'pricing', component: PricingComponent},
          { path: 'register', component: RegisterComponent},
          { path: '**', redirectTo: 'home' }
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
export class PublicRoutingModule { }