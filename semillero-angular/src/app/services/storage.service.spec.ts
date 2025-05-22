import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
    spyOn(localStorage, 'setItem').and.callFake(() => {}); // Simular almacenamiento
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify('testValue')); // Simular recuperación
    spyOn(localStorage, 'removeItem').and.callFake(() => {}); // Simular eliminación
  });

  it('debe guardar y recuperar datos en localStorage', () => {
    service.setItem('movie', 'pulpFiction');
    expect(service.getItem('movie')).toEqual('testValue');
  });

  it('debe eliminar datos correctamente', () => {
    service.removeItem('movie');
    expect(localStorage.getItem('movie')).toBeNull();
  });
});