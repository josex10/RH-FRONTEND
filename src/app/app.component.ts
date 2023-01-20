import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from './core/services/language/language.service';
import { Location } from '@angular/common';
import { AuthService } from './core/services/auth/auth.service';
import { Store } from '@ngrx/store';
import { authSystemUserReload } from './core/state/actions/Auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'R-Helper';

  constructor(private languageService: LanguageService, private location: Location, private store: Store){
    this.languageService.setDefaultLanguage();
    this.store.dispatch(authSystemUserReload());
  }
  ngOnInit(): void {}
}
