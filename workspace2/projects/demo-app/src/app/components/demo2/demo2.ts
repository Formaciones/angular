import { Component } from '@angular/core';
import { Demo4 } from '../demo4/demo4';

@Component({
  selector: 'app-demo2',
  imports: [Demo4],
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
