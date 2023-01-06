import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleErrorService } from '../handle-error/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class ServerErrorInterceptorService implements HttpInterceptor {

  constructor(private error: HandleErrorService,) { }

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return new Observable((observer) => {
      next.handle(req).subscribe(
        (res) => {
          if (res instanceof HttpResponse) {
            observer.next(res);
          }
        },
        (err: HttpErrorResponse) => {
          console.error(err);
        }
      );
    });
    }
}
