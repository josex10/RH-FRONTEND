import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ISystemUser } from 'src/app/shared/interfaces/ISystem-user/ISystem-user';
import { ISystemUserLoginResponse } from 'src/app/shared/interfaces/ISystem-user/ISystem-user-login-response';
import * as fromActions from '../../actions/Auth/auth.actions';
 
@Injectable()
export class AuthEffects {
 
  loging$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.authSystemUserLoginAction),
    mergeMap(({userLogingAuth}) => this.authService.systemUserLogin(userLogingAuth)
      .pipe(
        map((response: ISystemUserLoginResponse) => {
            const token: string = response.data.token;
            const systemUser: ISystemUser = response.data.systemUser;
            console.log("Into de effect")
            this.authService.setToken(token);
            this.router.navigate(["/system-restaurant"]);
            return fromActions.authSystemUserLoginSuccessAction({systemUser});
        }),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}