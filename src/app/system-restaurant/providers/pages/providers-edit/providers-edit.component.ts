import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EGeneralFormAction } from 'src/app/shared/enums';

@Component({
  selector: 'app-providers-edit',
  templateUrl: './providers-edit.component.html',
  styleUrls: ['./providers-edit.component.scss']
})
export class ProvidersEditComponent implements OnInit {

  public providerId: string = '';
  public formAction = EGeneralFormAction.EDIT;
  constructor(private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.paramMap.subscribe(params =>this.providerId = params.get('id')!);
  }
}
