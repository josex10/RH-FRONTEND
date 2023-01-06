import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-button-raise-extended',
  templateUrl: './shared-button-raise-extended.component.html',
  styleUrls: ['./shared-button-raise-extended.component.scss']
})
export class SharedButtonRaiseExtendedComponent implements OnInit {

  @Input('button-color') button_color?: string;
  @Input('button-icon') button_icon?: string;
  @Input('button-label') button_label?: string;
  @Input('button-disable') button_disable?: boolean = false;

  @Output() clickResponse = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  fnButtonClicked(value: any) {
    this.clickResponse.emit(value);
  }

}
