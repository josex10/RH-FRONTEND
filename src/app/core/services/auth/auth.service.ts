import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { AnyUserLoginAuth } from 'src/app/shared/interfaces/IAuth';
import { ISystemUserLoginResponse } from 'src/app/shared/interfaces/ISystem-user/ISystem-user-login-response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private envApiUrl = environment.API_URL;
  private envTokenKey = environment.LSTOKENKEY;

  constructor(private http: HttpClient) { }
  
  setToken(token: string) {
    localStorage.setItem(this.envTokenKey,token);
  }

  getToken(): string {
    let token = localStorage.getItem(this.envTokenKey);
    if(!token){token = ''}
    return token;
  }

  removeToken() {
    localStorage.removeItem(this.envTokenKey);
  }

  systemUserLogin(anyUserLoginAuth: AnyUserLoginAuth): Observable<ISystemUserLoginResponse>{
    return this.http.post<ISystemUserLoginResponse>(`${this.envApiUrl}/auth/login/system-user`, anyUserLoginAuth);
  }
  


}
