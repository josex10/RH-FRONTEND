import { ThisReceiver } from '@angular/compiler';
import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidationMessageService } from '../../services/validation-message/validation-message.service';

@Directive({
  selector: '[appFormcontrolValidationMsg]'
})
export class FormcontrolValidationMsgDirective implements OnInit, OnDestroy {

  @Input('validationMsgId')validationMsgId: string = '';
  public errorSpanId: string = '';
  public statusChangeSubscription?: Subscription;

  constructor(
    private elementRef: ElementRef,
    private control: NgControl, 
    private validationMsgService: ValidationMessageService,
    private _renderer: Renderer2
  ) { }

  ngOnInit(): void {
    console.log("oninit")
    this.errorSpanId = `${this.validationMsgId}${new Date().getTime()}-error-msg`;
    this.statusChangeSubscription = this.control.statusChanges?.subscribe(
      (status) => {
        (status === 'INVALID')?this.showError() : this.removeError();
      }
    )
  }
  ngOnDestroy(): void {
    console.log("Destroy")
    this.statusChangeSubscription?.unsubscribe();
  }

  private showError() {
    const original = this.elementRef.nativeElement as HTMLInputElement;
    console.log("Show error")
    this.removeError();
    const valErrors: ValidationErrors = this.control.errors!;
    console.log(valErrors)
    const firstKey = Object.keys(valErrors)[0];
    console.log(firstKey)
    const errorsMsgKey = `${firstKey}-msg`;
    console.log(errorsMsgKey)
    const errorMsg = this.validationMsgService.getValidationMsg(errorsMsgKey);
    console.log(errorMsg)

    let errorSpan = document.createElement('span');
    errorSpan.setAttribute("id", this.errorSpanId);
    errorSpan.setAttribute("class", 'restaurant_helper_template_validator_message_error');
    errorSpan.innerHTML = errorMsg;
    this._renderer.appendChild(original,errorSpan );
  }

  private removeError(){
    console.log("Remove Error")
    const errorElement = document.getElementById(this.errorSpanId);
    if(errorElement) errorElement.remove();
  }

}
