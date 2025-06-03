import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-movies',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  verDetalle(movieId: string): void {
      localStorage.setItem('selectedMovie', movieId);
    this.router.navigate(['/detalle']);
  }

  ngOnInit(): void {
    this.spinner.show(); // Mostrar el spinner al iniciar

    setTimeout(() => {
      this.spinner.hide(); // Ocultar después de cargar
    }, 2000);
  }
}
