import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsubmitValidationMsgDirective, FormcontrolValidationMsgDirective } from './directives';


@NgModule({
  declarations: [
    FormcontrolValidationMsgDirective,
    FormsubmitValidationMsgDirective
  ],
  imports: [
    CommonModule, 
    HttpClientModule
  ],
  exports: [
    FormcontrolValidationMsgDirective,
    FormsubmitValidationMsgDirective
  ]
})
export class CoreModule { }
