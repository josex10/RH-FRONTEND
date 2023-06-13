import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-shared-slide-toggle',
  templateUrl: './shared-slide-toggle.component.html',
  styleUrls: ['./shared-slide-toggle.component.scss'],
})
export class SharedSlideToggleComponent{

  @Input('input-label') input_label: string = 'Seleccione';
  @Input('input-value') input_value: boolean | null = false;
  @Input('input-disabled') input_disabled: boolean = false;
  @Input('input-color') input_color: string = 'warn';
  
  @Output('output-onchange') output_onchange = new EventEmitter;

  public onChange: Function = (value: string) =>{};
  public onTouched: Function = () =>{};

  constructor() {}

  toggle(value: MatSlideToggleChange): void {
    this.output_onchange.emit(value.checked);
  }
}
