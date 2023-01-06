import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root'
})
export class ServerHeaderInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService, private languageService: LanguageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.authService.getToken();
    const language = this.languageService.getLanguage();
    req = req.clone({
        setHeaders: {
          Language: language,
          Authorization: `Bearer ${token}`
        }
    })
    return next.handle(req);
  }
}
