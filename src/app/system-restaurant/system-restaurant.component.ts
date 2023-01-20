import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { authSystemUserLogoutAction } from '../core/state/actions/Auth/auth.actions';

@Component({
  selector: 'app-system-restaurant',
  templateUrl: './system-restaurant.component.html',
  styleUrls: ['./system-restaurant.component.scss']
})
export class SystemRestaurantComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  fnLogout = ()=>{
    this.store.dispatch(authSystemUserLogoutAction());
  }

}
