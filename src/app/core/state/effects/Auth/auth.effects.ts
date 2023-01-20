import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AuthLoginResponse, ISystemUser } from 'src/app/shared/types';
import { systemCompanyActionSuccess } from '../../actions';
import * as fromActions from '../../actions/Auth/auth.actions';
 
@Injectable()
export class AuthEffects {
 
  loging$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.authSystemUserLoginAction),
    mergeMap(({userLogingAuth}) => this.authService.systemUserLogin(userLogingAuth)
      .pipe(
        map((response: AuthLoginResponse) => {
            this.authService.setToken(response.access_token);
            this.authService.setRefreshToken(response.refresh_token);
            this.authService.setIsLogin(true);
            this.router.navigate(["/system-restaurant/v1"]);
            this.store.dispatch(systemCompanyActionSuccess({systemCompany: response.systemCompany}));
            return fromActions.authSystemUserLoginSuccessAction({systemUser: response.systemUser});
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.authSystemUserLogoutAction),
    mergeMap(() => this.authService.systemUserLogout()
      .pipe(
        map(() => {
            this.authService.removeToken();
            this.authService.removeRefreshToken();
            this.authService.setIsLogin(false);
            this.router.navigate(["/public/login"]);
            return fromActions.authSystemUserLogoutSuccessAction();
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  reload$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.authSystemUserReload),
    mergeMap(() => this.authService.systemUserReload()
      .pipe(
        map((response: AuthLoginResponse) => {
            this.authService.setToken(response.access_token);
            this.authService.setRefreshToken(response.refresh_token);
            this.authService.setIsLogin(true);
            this.store.dispatch(systemCompanyActionSuccess({systemCompany: response.systemCompany}));
            return fromActions.authSystemUserReloadSuccess({systemUser: response.systemUser});
        }),
        catchError(()=> of(fromActions.authSystemUserLogoutAction))
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router, 
    private store: Store
  ) {}
}