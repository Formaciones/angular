import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL: string;
  Headers: HttpHeaders;
  
  constructor(private http: HttpClient) { 
    this.URL = 'https://api-demo-angular.azurewebsites.net/customers';
    this.Headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'APIKey': '1234567890.'
    });
  }

  getCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(this.URL, { headers: this.Headers });
  }

  getCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.URL}/${id}`, { headers: this.Headers });
  }
}
