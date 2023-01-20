import { formatNumber } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TSharedSelect } from '../../types';

@Component({
  selector: 'app-shared-select',
  templateUrl: './shared-select.component.html',
  styleUrls: ['./shared-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SharedSelectComponent),
      multi: true
    }
  ]
})
export class SharedSelectComponent implements ControlValueAccessor{
  @Input('input-label') input_label: string = 'Seleccione';
  @Input('input-disable') input_disable: boolean = false;
  @Input('input-select-data') input_select_data: TSharedSelect[] = [];
  @Output('output-onchange') output_onchange = new EventEmitter;

  public _label: string = 'Seleccione';
  public _id: any = null;
  public _openOptions = false;
  
  constructor() {}

  get value() {
    return this._id;
  }

  onSelect(data: TSharedSelect){
    this._label = this.input_label;
    this._id = data.id;
    this.onChange(this._id);
    this.output_onchange.emit(this._id);
    this._openOptions = false;
  }

  onChange = (value: any) => {
    this._id = value;
  }

  onTouched = () => {}

  writeValue(value: any): void {
    this._id = value;
    this.onChange(this._id);
  }

  registerOnChange(fn: (value: any)=>void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: ()=>void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.input_disable = isDisabled;
  }

}
