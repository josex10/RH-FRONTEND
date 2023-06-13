import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ProvidersComponent } from './pages/providers.component';
import { ProvidersCreateComponent } from './pages/providers-create/providers-create.component';
import { ProvidersEditComponent } from './pages/providers-edit/providers-edit.component';
import { ProvidersRoutingModule } from './providers-routing.module';
import { ComponentsModule } from '../components/components.module';
import { ProviderFormComponent } from './components/provider-form/provider-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    ProvidersComponent,
    ProvidersCreateComponent,
    ProvidersEditComponent,
    ProviderFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProvidersRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class ProvidersModule { }