import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';




import { SharedInputComponent } from './components/shared-input/shared-input.component';
import { SharedNavBarComponent } from './components/shared-nav-bar/shared-nav-bar.component';
import { SharedButtonRaiseExtendedComponent } from './components/shared-button-raise-extended/shared-button-raise-extended.component';
import { SharedLabelErrorComponent } from './components/shared-label-error/shared-label-error.component';
import { SharedSystemNavBarComponent } from './components/shared-system-nav-bar/shared-system-nav-bar.component';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { DataPropertyGetterPipe } from './directives';
import { SharedTitleComponent } from './components/shared-title/shared-title.component';
import { SharedTextareaComponent } from './components/shared-textarea/shared-textarea.component';
import { SharedSelectComponent } from './components/shared-select/shared-select.component';
import { SharedSlideToggleComponent } from './components/shared-slide-toggle/shared-slide-toggle.component';

@NgModule({
  declarations: [
    SharedInputComponent,
    SharedNavBarComponent,
    SharedButtonRaiseExtendedComponent,
    SharedLabelErrorComponent,
    SharedSystemNavBarComponent,
    SharedTableComponent,
    DataPropertyGetterPipe,
    SharedTitleComponent,
    SharedTextareaComponent,
    SharedSelectComponent,
    SharedSlideToggleComponent,
  ],
  imports: [
    CommonModule, 
    MatInputModule,
    MatIconModule, 
    RouterModule, 
    MatToolbarModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatFormFieldModule
  ], 
  exports: [
    SharedInputComponent,
    SharedNavBarComponent,
    SharedButtonRaiseExtendedComponent, 
    SharedLabelErrorComponent,
    SharedSystemNavBarComponent,
    DataPropertyGetterPipe,
    SharedTableComponent,
    SharedTitleComponent,
    SharedTextareaComponent,
    SharedSelectComponent,
    SharedSlideToggleComponent
  ]
})
export class SharedModule { }