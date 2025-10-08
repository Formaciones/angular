import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  email: string;
  password: string;
  msgError: string;
  returnUrl: string;

  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) {
    this.email = '';
    this.password = '';
    this.msgError = '';
    this.returnUrl = '/home';
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnurl'] || '/home';
  }

  onLogin() {
    if(this.authService.login(this.email, this.password)) {
      this.router.navigateByUrl(this.returnUrl);
    } else {
      this.msgError = 'Usuario y/o contraseña incorrectos';
    }
  }
}
