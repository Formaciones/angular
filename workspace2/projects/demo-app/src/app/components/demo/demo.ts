import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  imports: [FormsModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css'
})
export class Demo implements OnInit {
  texto: string;
  foto: string;
  ancho: number;
  numero: number;
  booleano: boolean;
  colores: string[];
  fecha: Date;
  
  constructor() {  
    console.log('Demo component constructor');
    this.texto = 'Hola Mundo';
    this.foto = 'https://cdn.mesemar.com/wp-content/uploads/pexels-photo-457882-800x534.jpeg';
    this.ancho = 200;
    this.numero = 42;
    this.booleano = true;
    this.colores = ['Rojo', 'Verde', 'Azul'];
    this.fecha = new Date();
  }

  ngOnInit(): void {
    console.log('Demo component onInit');
  }

  onChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    // Sin validación
    this.texto = input.value;

    // Evitar que el valor sea "10"
    if (input.value !== "10") this.texto = input.value;
    else {
      this.texto = "";
      input.value = "";
    }
  }

  mostrarMensaje(e: Event): void {
    console.log(e);
    alert('Hola Mundo');
  }

  cambiarImagen(): void {
    this.foto = 'https://c2.staticflickr.com/4/3158/2637086439_0791f794e1_b.jpg';
  }

  aumentarImagen(): void {
    this.ancho += 20;
  }

  reducirImagen(): void {
    this.ancho -= 20;
  }
}
