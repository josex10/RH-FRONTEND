import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-shared-input',
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.scss']
})
export class SharedInputComponent implements  ControlValueAccessor{

  @Input('input-label') input_label?: string;
  @Input('input-type') input_type: string = 'text';
  @Input('input-value') input_value: string | null = null;

  // public inputValue: string;
  public onChange: Function = (value: string) =>{};
  public onTouched: Function = () =>{};
  public disabled: boolean = false;

  constructor() {}

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
      this.disabled = isDisabled;
  }

}
