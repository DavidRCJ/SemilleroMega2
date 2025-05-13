import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // Simulación de usuarios registrados con datos reales
  private usuariosRegistrados = [
    { email: 'usuario1@example.com', password: '123456' },
    { email: 'usuario2@example.com', password: 'password' }
  ];

  login() {
    console.log("Datos ingresados:", this.email, this.password); // Para depurar

    const usuarioValido = this.usuariosRegistrados.find(
      user => user.email === this.email && user.password === this.password
    );

    if (usuarioValido) {
      console.log("Login exitoso. Redirigiendo a Movies...");
      this.router.navigate(['/movies']); // Redirige a la página de películas
    } else {
      alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
  }

  registro() {
    console.log("Redirigiendo a Register...");
    this.router.navigate(['/register']); // Redirige a la página de registro
  }
}