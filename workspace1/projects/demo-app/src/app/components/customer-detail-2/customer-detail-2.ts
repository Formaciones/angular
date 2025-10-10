import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';


/** Validador personalizado para comprobar coincidencia de contraseñas */
export const passwordMatchValidator: ValidatorFn = (group: AbstractControl) => {
  const pass = group.get('pass')?.value;
  const pass2 = group.get('pass2')?.value;
  return pass && pass2 && pass === pass2 ? null : { passwordMismatch: true };
};

@Component({
  selector: 'app-customer-detail-2',
  standalone: false,
  templateUrl: './customer-detail-2.html',
  styleUrl: './customer-detail-2.css'
})
export class CustomerDetail2 implements OnInit {
  id: string;
  loading: boolean;
  customer: Customer;
  error: string;

  pass: string;
  pass2: string;

  customerForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private fb: FormBuilder) {
    this.id = '';
    this.loading = false;
    this.customer = new Customer();
    this.error = '';

    this.pass = '';
    this.pass2 = '';

    this.customerForm = this.fb.group({});
  }
  
  ngOnInit(): void {
    //this.id = this.activatedRoute.snapshot.queryParams['id'] || '';
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.loadCustomer();

    // Crear formulario
    this.customerForm = this.fb.group({
      customerID: ['', Validators.required],
      companyName: ['', Validators.required],
      contactName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      contactTitle: [''],
      address: [''],
      postalCode: [''],
      region: [''],
      city: [''],
      country: [''],
      phone: [''],
      fax: [''],
      pass: [''],
      pass2: ['']
    }, { validators: passwordMatchValidator });

    // Carga de datos iniciales al crear el formulario, opcional.

    // this.customerForm = this.fb.group({
    //   customerID: [this.customer.customerID, [Validators.required]]
    // });    

    // Los datos no se mostraban porque patchValue se tiene que ejecutar después de la carga de datos.
    // En las primeras líneas se llama a this.loadCustomer(); para realizar la carga y antes de finalizar
    // se ejecutaba el patchValue (en el lugar de este comentario) sin que la carga de datos hubiese finalizado.
    // Solución: trasladar el patchValue al loadCustomer() en el bloque NEXT del SUSCRIBE
    
    //this.customerForm.patchValue({}) ...
  }

  loadCustomer() {
    this.loading = true;

    this.customerService.getCustomer(this.id).subscribe({
      next: (data: Customer) => {
        this.customer = data;
        this.loading = false;

        //Carga de datos iniciales con el PATCHVALUE
        this.customerForm.patchValue({
          customerID: this.customer.customerID,
          companyName: this.customer.companyName,
          contactName: this.customer.contactName,
          contactTitle: this.customer.contactTitle,
          address: this.customer.address,
          city: this.customer.city,
          region: this.customer.region,
          postalCode: this.customer.postalCode,
          country: this.customer.country,
          phone: this.customer.phone,
          fax: this.customer.fax,      
        })
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

  onSumit(): void {
    // marcar todos como touched para mostrar errores si hay
    this.customerForm.markAllAsTouched();

    if (this.customerForm.invalid) return;
    else this.updateCustomer();
  }

  // getters para facilitar acceso en la plantilla
  get f() { 
    return this.customerForm.controls; 

  }

  get formGroup() { 
    return this.customerForm; 
  }
}