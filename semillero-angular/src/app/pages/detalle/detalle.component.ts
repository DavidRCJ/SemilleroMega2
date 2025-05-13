import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  movieId: string | null = null;
  data: any = null;
  trailerUrl: SafeResourceUrl | null = null;

  movieData: { [key: string]: any } = {
    pulpFiction: {
      titulo: 'Pulp Fiction',
      anio: 1994,
      director: 'Quentin Tarantino',
      sinopsis: 'Historias entrelazadas de crimen en Los Ángeles que giran en torno a violencia, redención y cultura pop.',
      imagen: '/assets/Culto/pulpFiction.jpg',
      trailer: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
      pelicula: '#'
    },
    mariposa: {
      titulo: 'The Butterfly Effect',
      anio: 2004,
      director: 'Eric Bress y J. Mackye Gruber',
      sinopsis: 'Un hombre descubre que puede viajar en el tiempo y cambiar eventos de su pasado, pero cada cambio tiene consecuencias inesperadas.',
      imagen: '/assets/Culto/buttEffect.jpg',
      trailer: 'https://www.youtube.com/watch?v=kkWQLjI2rAU',
      pelicula: '#'
    },
    // Puedes seguir agregando más películas aquí con la misma estructura
  };

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.movieId = localStorage.getItem('selectedMovie');
    if (this.movieId && this.movieData.hasOwnProperty(this.movieId)) {
      this.data = this.movieData[this.movieId];
      this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.trailer);
    } else {
      console.warn('No se encontró información para la película con ID:', this.movieId);
      this.data = null;
    }
  }

  addToFavorites(): void {
    if (this.data) {
      alert(`${this.data.titulo} agregada a favoritos (podrías guardarla en localStorage).`);
    }
  }

  verTrailer(): void {
    if (this.data?.trailer) {
      window.open(this.data.trailer, '_blank');
    }
  }

  verPelicula(): void {
    if (this.data?.pelicula) {
      window.location.href = this.data.pelicula;
    }
  }
}
