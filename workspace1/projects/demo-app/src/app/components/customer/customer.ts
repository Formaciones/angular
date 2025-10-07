import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {
  clientes: Array<Customer>;

  constructor(private customerService: CustomerService) { 
    this.clientes = new Array<Customer>();
  } 

  getClientes(): void {
    console.log('getClientes');
    this.customerService.getCustomers().subscribe((data: any) => {
      console.log('getClientes response');
      this.clientes = data;
    });
  }
}
