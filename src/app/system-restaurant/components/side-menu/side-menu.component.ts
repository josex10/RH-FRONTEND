import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authSystemUserLogoutAction } from 'src/app/core/state/actions/Auth/auth.actions';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  constructor(private store: Store, private _router: Router){

  }
  fnLogout = ()=>{
    this.store.dispatch(authSystemUserLogoutAction());
  }

  changeRoute() {
    this._router.navigate([{ outlets: {primary: ['restaurant'], secondOutlet: ['providers'] }}])
  }
}
