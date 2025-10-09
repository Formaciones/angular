import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-detail',
  standalone: false,
  templateUrl: './customer-detail.html',
  styleUrl: './customer-detail.css'
})
export class CustomerDetail implements OnInit {
  id: string;
  loading: boolean;
  customer: Customer | undefined;
  error: string;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService) {
    this.id = '';
    this.loading = false;
    this.customer = undefined;
    this.error = '';
  }
  
  ngOnInit(): void {
    //this.id = this.activatedRoute.snapshot.queryParams['id'] || '';
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.loadCustomer();
  }

  loadCustomer() {
    this.loading = true;

    this.customerService.getCustomer(this.id).subscribe({
      next: (data: Customer) => {
        this.customer = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = `Error al recuperar los datos del cliente ${this.id}`;
        console.error(this.error);
        this.loading = false;
      }
    });
  }
}
