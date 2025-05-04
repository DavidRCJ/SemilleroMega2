import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movieId: string = '';
  movieData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id')!;
    this.loadMovie();
  }

  loadMovie() {
    switch (this.movieId) {
      case 'pulpfiction':
        this.movieData = {
          title: 'Pulp Fiction',
          year: 1994,
          director: 'Quentin Tarantino',
          synopsis: 'Una historia violenta entrelazada con humor negro y crimen.'
        };
        break;
      case 'jumpstreet':
        this.movieData = {
          title: '21 Jump Street',
          year: 2012,
          director: 'Phil Lord, Chris Miller',
          synopsis: 'Dos policías jóvenes se infiltran en una escuela secundaria.'
        };
        break;
      // agrega más casos...
      default:
        this.movieData = {
          title: 'Película no encontrada',
          year: '',
          director: '',
          synopsis: ''
        };
    }
  }
}
