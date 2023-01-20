import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-textarea',
  templateUrl: './shared-textarea.component.html',
  styleUrls: ['./shared-textarea.component.scss']
})
export class SharedTextareaComponent {
  @Input('input-label') input_label?: string;
  @Input('input-disabled') input_disabled: boolean = false;
  @Input('input-value') input_value: string = '';

  public onChange: Function = (value: string) =>{};
  public onTouched: Function = () =>{};

  constructor() { 
    this.input_value = "";
  }

  writeValue(value: string): void {
      this.input_value = value;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
      this.input_disabled = isDisabled;
  }
}
