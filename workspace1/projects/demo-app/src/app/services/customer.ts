import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL: string;
  Headers: HttpHeaders;

  private http2 = inject(HttpClient, { });
  
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
