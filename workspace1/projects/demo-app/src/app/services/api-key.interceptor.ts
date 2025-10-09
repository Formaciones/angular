import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyInterceptor implements HttpInterceptor {
  private APIKey = '1234567890.';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url.includes('/customers')) {
      // Este código solo afecta a las llamadas https://dominio.com/customers
    }

    const cloneRequest = req.clone({
      setHeaders: { 'APIKey': this.APIKey }
    });

    return next.handle(cloneRequest);
  }
}
