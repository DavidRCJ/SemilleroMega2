import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    const validUser = {
      email: 'user@mega.com',
      password: 'mega2025',
    };

    if (!this.email || !this.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (this.email === validUser.email && this.password === validUser.password) {
      this.router.navigate(['/movies']);
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  }
}
