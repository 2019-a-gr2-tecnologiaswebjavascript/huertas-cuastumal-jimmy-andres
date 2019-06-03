import { TestBed } from '@angular/core/testing';

import { RegistrarNombreService } from './registrar-nombre.service';

describe('RegistrarNombreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrarNombreService = TestBed.get(RegistrarNombreService);
    expect(service).toBeTruthy();
  });
});
