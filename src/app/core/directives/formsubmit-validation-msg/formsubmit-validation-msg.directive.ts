import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appFormsubmitValidationMsg]'
})
export class FormsubmitValidationMsgDirective {

  @Input() validationControl?: FormGroup;

  @HostListener('click', ["$event"])
  handleClickEvent(event: any) {
    this.markAsTouched(this.validationControl!);
  }

  private markAsTouched(formGroup: FormGroup): void {
    formGroup.markAsTouched();
    formGroup.updateValueAndValidity();
    (<any>Object).values(formGroup.controls).forEach(
      (control: FormGroup<any>) => {
        control.markAsTouched();
        control.updateValueAndValidity({ onlySelf: false, emitEvent: true });
        if (control.controls) {
          this.markAsTouched(control);
        }
      });
  }

}
