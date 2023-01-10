import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-system-nav-bar',
  templateUrl: './shared-system-nav-bar.component.html',
  styleUrls: ['./shared-system-nav-bar.component.scss']
})
export class SharedSystemNavBarComponent {

  constructor(private _router: Router) { }

  public onToggleSidenav = () => { 
  }

  fnChangeRoute(route: string){
    this._router.navigate([`/public/${route}`]);
  }
}
