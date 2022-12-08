import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactModule } from './contact/contact.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { FeaturesModule } from './features/features.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { PricingModule } from './pricing/pricing.module';
import { RegisterModule } from './register/register.module';



@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    ContactModule,
    FeaturesModule,
    HomeModule,
    LoginModule,
    PricingModule,
    RegisterModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
