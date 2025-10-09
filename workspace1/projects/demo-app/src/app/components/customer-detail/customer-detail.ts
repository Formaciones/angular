import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer';
import { Customer } from '../../models/customer.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-detail',
  standalone: false,
  templateUrl: './customer-detail.html',
  styleUrl: './customer-detail.css'
})
export class CustomerDetail implements OnInit {
  id: string;
  loading: boolean;
  customer: Customer;
  error: string;

  pass: string;
  pass2: string;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService) {
    this.id = '';
    this.loading = false;
    this.customer = new Customer();
    this.error = '';

    this.pass = '';
    this.pass2 = '';
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

  updateCustomer() {
    this.customerService.updateCustomer(this.id, this.customer).subscribe({
      next: () => {
        //Lógica para notificar que se actualizado correctamente
        alert('Modificado correctamente.');
      },
      error: (err) => {
        this.error = `Error al actualizar los datos del cliente ${this.id}`;
        console.error(this.error);
      }
    });
  }

  onSumit(form: NgForm): void {
    // Lectutra de valores (pass representa el valor del atributo NAME)
    let password = form.value.pass;

    // Generar errores
    if(this.pass != this.pass2) form.controls['pass'].setErrors({ passwordMismatch: true });
    else form.controls['pass'].setErrors({ passwordMismatch: false });

    // Comprobar si es valido o invalido.
    if(form.valid) { }
    if(form.invalid) { }

    this.updateCustomer();
  }
}
