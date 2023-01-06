import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { SharedInputComponent } from './components/shared-input/shared-input.component';
import { SharedNavBarComponent } from './components/shared-nav-bar/shared-nav-bar.component';
import { SharedButtonRaiseExtendedComponent } from './components/shared-button-raise-extended/shared-button-raise-extended.component';
import { SharedLabelErrorComponent } from './components/shared-label-error/shared-label-error.component';


@NgModule({
  declarations: [
    SharedInputComponent,
    SharedNavBarComponent,
    SharedButtonRaiseExtendedComponent,
    SharedLabelErrorComponent
  ],
  imports: [
    CommonModule, 
    MatInputModule,
    MatIconModule, 
    RouterModule, 
    MatToolbarModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatButtonModule
  ], 
  exports: [
    SharedInputComponent,
    SharedNavBarComponent,
    SharedButtonRaiseExtendedComponent, 
    SharedLabelErrorComponent
  ]
})
export class SharedModule { }