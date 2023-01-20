import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authSystemUserLogoutAction } from 'src/app/core/state/actions/Auth/auth.actions';

@Component({
  selector: 'app-shared-system-nav-bar',
  templateUrl: './shared-system-nav-bar.component.html',
  styleUrls: ['./shared-system-nav-bar.component.scss']
})
export class SharedSystemNavBarComponent {

  constructor(private _router: Router, private store: Store) { }

  public onToggleSidenav = () => { 
  }

  fnChangeRoute(route: string){
    this._router.navigate([`/public/${route}`]);
  }

  fnLogout = ()=>{
    this.store.dispatch(authSystemUserLogoutAction());
  }
}
