import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class CustomerComponent implements OnInit {
  customers: Array<Customer>;

  constructor(private customerService: CustomerService) { 
    this.customers = new Array<Customer>();
  } 

  ngOnInit(): void {
    //this.getClientes();
  }

  getClientes(): void {
    this.customerService.getCustomers().subscribe((data: Array<Customer>) => {
      this.customers = data;
    });
  }
}
