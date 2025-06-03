import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.spinner.show(); // Mostrar el spinner al iniciar

    setTimeout(() => {
      this.spinner.hide(); // Ocultar después de cargar
    }, 2000);
  }

  verDetalle(movieId: string): void {
    localStorage.setItem('selectedMovie', movieId);
    this.router.navigate(['/detalle']);
  }
}
