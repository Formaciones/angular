import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: false,
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  colorSeleccionado: string;
  bgSeleccionado: string;
  texto: string;
  colores: string[];

  constructor() {
    this.colorSeleccionado = 'blue';
    this.bgSeleccionado = 'white';
    this.texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    this.colores = ['Green', 'Red', 'Blue', 'Yellow', 'Purple', 'White', 'Black'];
  }

}
