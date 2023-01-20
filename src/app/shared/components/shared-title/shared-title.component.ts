import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-title',
  templateUrl: './shared-title.component.html',
  styleUrls: ['./shared-title.component.scss']
})
export class SharedTitleComponent {

  @Input('title') title: string = 'System Restaurant';
  @Input('title-icon') titleIcon: string = 'storefront';
}
