import { Component, ViewChild } from '@angular/core';
import { Detail } from '../detail/detail';

import data from '../../../data/usersData.json';
import { User } from '../../../models/user.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-master',
  standalone: false,
  templateUrl: './master.html',
  styleUrl: './master.css'
})
export class Master {
  usersList: Array<User>;
  selectUser: User;
  // Dos formas de usar ViewChild para obtener la referencia del componente hijo
  // 1. Usando la clase del componente
  // 2. Usando una referencia de template (ver master.html)
  @ViewChild(Detail) detailComponent1!: Detail;
  @ViewChild('detalle') detailComponent2!: Detail;

  mostrarDetalle: boolean;
  fecha: Date;
  moneda: number;

  time: Observable<string>;

  constructor() {
    this.usersList = data;
    this.selectUser = new User();

    this.mostrarDetalle = false;

    this.fecha = new Date();
    this.moneda = 1234.567890;

    this.time = new Observable<string>((observer) => {
      setInterval( () => {
        const now = new Date();
        observer.next(now.toString());
      }, 1000); 
    });
  } 

  onSelectUser(user: User) {
    this.selectUser = user;
    this.mostrarDetalle = true
    // Alternativa para pasar el usuario seleccionado al componente hijo
    // Usando ViewChild
    // this.detailComponent1.usuarioHijo = user;
    // this.detailComponent1.onSave();
  }

  onUsuarioSaveEmirt(user: User) {
    console.log('Usuario salvado: ', user);
    alert('Usuario salvado: ' + user.firstname + ' ' + user.lastname);
  } 

}
