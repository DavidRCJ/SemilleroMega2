import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesComponent } from './movies.component';
import { Router } from '@angular/router';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesComponent],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe almacenar la película en localStorage y navegar a detalle', () => {
    spyOn(localStorage, 'setItem');
    component.verDetalle('pulpFiction');
    expect(localStorage.setItem).toHaveBeenCalledWith('selectedMovie', 'pulpFiction');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/detalle']);
  });
});