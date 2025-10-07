import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[colorauto]',
  standalone: false,
  host:{
    '(mouseenter)': 'onMouseEnter($event)',
    '(mouseleave)': 'onMouseLeave()',
    '[style.backgroundColor]': 'bgColor'
  }
})
export class Colorauto {
  @Input() color: string;
  @Input() bgColor: string;

  constructor(private el: ElementRef, private render: Renderer2) { 
    this.color = 'green';
    this.bgColor = 'tramspoarent';
  }

  @HostListener('click', ['$event']) onClick(event: any) {
    //event.target.target.style.color = 'green';
    this.render.setStyle(this.el.nativeElement, 'color', this.color);
  }

  onMouseEnter(event: any) {
    // Las tres opciones son válidas, la forma recomendada es usando Renderer2 por temas de seguridad.
    event.target.style.color = 'blue';
    this.el.nativeElement.style.color = 'blue';

    this.render.setStyle(this.el.nativeElement, 'color', 'blue');
  }

  onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
  }
}
