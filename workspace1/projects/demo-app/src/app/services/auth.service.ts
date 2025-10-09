import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Es posible generar token JWT y almacenarlos en una cookie
  // Como alternativa en este ejemplo utilizamos una variable
  // v1
  private isLoggedIn: boolean = false;

  // Utilizamos un Observable para propogar el estado de autenticación
  // v2
  private isLoggedIn2: BehaviorSubject<boolean>;
  isLoggedIn2$: Observable<boolean>;

  constructor(private router: Router) { 
    this.isLoggedIn2 = new BehaviorSubject<boolean>(false);
    this.isLoggedIn2$ = this.isLoggedIn2.asObservable();
  }

  loginV1(email:string, password:string): boolean {
    if(email === 'user@demo.com' && password === '1234') {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

  login(email:string, password:string): boolean {
    if(email === 'user@demo.com' && password === '1234') {
      this.isLoggedIn2.next(true);
      return true;
    }

    return false;
  }

  logoutV1(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.isLoggedIn2.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticatedV1() : boolean {
    return this.isLoggedIn;
  }

  isAuthenticated() : boolean {
    return true;
    return this.isLoggedIn2.value;
  }

}
