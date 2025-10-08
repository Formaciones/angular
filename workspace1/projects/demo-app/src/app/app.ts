import { Component, OnInit, signal } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
    this.authService.isLoggedIn2$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}
