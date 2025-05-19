import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  constructor(private router: Router) {}

  verDetalle(movieId: string): void {
      localStorage.setItem('selectedMovie', movieId);
    this.router.navigate(['/detalle']);
  }
}
