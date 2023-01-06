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

  public inputValue: string;
  public onChange: Function = (value: string) =>{};
  public onTouched: Function = () =>{};
  public disabled: boolean = false;

  constructor() { 
    this.inputValue = "";
  }

  writeValue(value: string): void {
      this.inputValue = value;
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
