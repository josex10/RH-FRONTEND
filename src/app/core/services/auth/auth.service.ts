import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AnyUserLoginAuth } from 'src/app/shared/interfaces/IAuth';
import { AuthLoginResponse, ISystemUser } from 'src/app/shared/types';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private envApiUrl = environment.API_URL;
  private envTokenKey = environment.LSTOKENKEY;
  private envTokenRefreshKey = environment.LSTOKENREFRESHKEY;
  private envIsLogin = environment.LSISLOGIN;

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

  setRefreshToken(token: string) {
    localStorage.setItem(this.envTokenRefreshKey,token);
  }

  getRefreshToken(): string {
    let token = localStorage.getItem(this.envTokenRefreshKey);
    if(!token){token = ''}
    return token;
  }

  removeRefreshToken() {
    localStorage.removeItem(this.envTokenRefreshKey);
  }

  setIsLogin(value: boolean) {
    localStorage.setItem(this.envIsLogin, String(value));
  }

  getIsLogin(): boolean {
    const isLogin = localStorage.getItem(this.envIsLogin);
    let isLoginResponse = false;
    if(isLogin === 'true'){isLoginResponse = true}
    return isLoginResponse;
  }

  removeIsLogin() {
    localStorage.removeItem(this.envIsLogin);
  }

  systemUserLogin(anyUserLoginAuth: AnyUserLoginAuth): Observable<AuthLoginResponse>{
    return this.http.post<AuthLoginResponse>(`${this.envApiUrl}/auth/login/system-user`, anyUserLoginAuth);
  }

  systemUserLogout(): Observable<any>{
    return this.http.post(`${this.envApiUrl}/auth/logout/system-user`, {});
  }

  systemUserReload(): Observable<AuthLoginResponse>{
    return this.http.get<AuthLoginResponse>(`${this.envApiUrl}/auth/reload/system-user`);
  }
  


}
