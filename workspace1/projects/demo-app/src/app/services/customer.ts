import { HttpClient, HttpHeaders, provideHttpClient, withInterceptors } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { ApiKeyInterceptor } from './api-key.interceptor';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL: string;
  Headers: HttpHeaders;

  // No funciona
  // La idea es crear un cliente HTTP mediante Inyección de Dependencias, que usa un Interceptor
  // El interceptor no se declara en el Módulo
  //private http2 = inject(HttpClient, { deps:[ provideHttpClient(withInterceptors([ApiKeyInterceptor])) ]});
  
  constructor(private http: HttpClient) { 
    this.URL = 'https://api-demo-angular.azurewebsites.net/customers';
    
    // Sin INTERCEPTOR
    this.Headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'APIKey': '1234567890.'
    });

    // Con INTERCEPTOR
    this.Headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(this.URL, { headers: this.Headers });
  }

  getCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.URL}/${id}`, { headers: this.Headers });
  }

  updateCustomer(id: string, customer: Customer): Observable<void> {
    return this.http.put<void>(`${this.URL}/${id}`, customer, { headers: this.Headers });
  }
}
