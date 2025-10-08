import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class CustomerComponent {
  customers: Array<Customer>;

  constructor(private customerService: CustomerService) { 
    this.customers = new Array<Customer>();
  } 

  getClientes(): void {
    console.log('getClientes');
    this.customerService.getCustomers().subscribe((data: Array<Customer>) => {
      console.log('getClientes response');
      this.customers = data;
    });
  }
}
