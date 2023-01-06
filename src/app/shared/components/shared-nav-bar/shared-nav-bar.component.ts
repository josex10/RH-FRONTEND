import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './shared-nav-bar.component.html',
  styleUrls: ['./shared-nav-bar.component.scss']
})
export class SharedNavBarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => { 
  }

  fnChangeRoute(route: string){
    this._router.navigate([`/public/${route}`]);
  }

}
