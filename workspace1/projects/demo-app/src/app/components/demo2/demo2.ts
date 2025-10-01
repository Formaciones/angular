import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  standalone: false,
  template: `
    <p>
      Componente Demo2
    </p>
    <app-demo4></app-demo4>
  `,
  styleUrl: './demo2.css'
})
export class Demo2 {

}
