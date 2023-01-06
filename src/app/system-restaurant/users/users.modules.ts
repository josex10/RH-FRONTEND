import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { UsersComponent } from './pages/users.component';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserModule { }