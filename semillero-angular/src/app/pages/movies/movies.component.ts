import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  constructor(private router: Router) {}

  verDetalle(movieId: string): void {
      localStorage.setItem('selectedMovie', movieId);
    this.router.navigate(['/detalle']);
  }
}
