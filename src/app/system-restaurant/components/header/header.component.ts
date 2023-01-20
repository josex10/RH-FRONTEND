import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectAuthLoginUserInformation } from 'src/app/core/state/selectors/Auth/auth.selector';
import { ISystemUser } from 'src/app/shared/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {

  systemUserName$ = new Observable<string | undefined>;


  constructor(private store: Store<any>){

  }

  ngOnInit(): void {
    this.systemUserName$ = this.store.select(selectAuthLoginUserInformation).pipe(map(user => user?.clm_name));
  }

}
