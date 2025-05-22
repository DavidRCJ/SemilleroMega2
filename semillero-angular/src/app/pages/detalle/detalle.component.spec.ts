import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleComponent } from './detalle.component'; 
import { DomSanitizer } from '@angular/platform-browser';     
import { StorageService } from 'src/app/services/storage.service';

describe('DetalleComponent', () => {
  let component: DetalleComponent;
  let fixture: ComponentFixture<DetalleComponent>;
/*
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleComponent],
      providers: [DomSanitizer],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleComponent);
    component = fixture.componentInstance;
  });*/
  beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [DetalleComponent], // Importarlo en lugar de declararlo
  }).compileComponents();

  fixture = TestBed.createComponent(DetalleComponent);
  component = fixture.componentInstance;
});


  it('debe recuperar información de película desde localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue('pulpFiction');
    component.ngOnInit();
    expect(component.data.titulo).toEqual('Pulp Fiction');
  });
});