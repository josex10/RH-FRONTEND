import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-label-error',
  templateUrl: './shared-label-error.component.html',
  styleUrls: ['./shared-label-error.component.scss']
})
export class SharedLabelErrorComponent implements OnInit {
  @Input('label-error-icon')label_error_icon: string = 'cancel';
  @Input('label-error-message')label_error_message: string = 'cancel';
  
  constructor() { }

  ngOnInit(): void {
  }

}
