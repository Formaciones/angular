import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, OnChanges, DoCheck, OnDestroy, SimpleChanges } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() usuarioHijo: User;
  @Output() usuarioSave = new EventEmitter<User>();

  @ViewChild('title') titleElement!: ElementRef<HTMLHeadingElement>;

  constructor() {
    console.log('Detail: constructor'); 
    this.usuarioHijo = new User();
  }
  ngOnInit(): void {
    console.log('Detail: ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Detail: ngOnChanges', changes);
    
    if (this.titleElement) {
      this.titleElement.nativeElement.innerHTML = `Ficha: ${this.usuarioHijo.firstname} ${this.usuarioHijo.lastname}`;
    }
  }

  ngDoCheck(): void {
    console.log('Detail: ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('Detail: ngOnDestroy');
  }

  onSave() {
    console.log('Salvando usuario...');
    this.usuarioSave.emit(this.usuarioHijo);
  }
}
