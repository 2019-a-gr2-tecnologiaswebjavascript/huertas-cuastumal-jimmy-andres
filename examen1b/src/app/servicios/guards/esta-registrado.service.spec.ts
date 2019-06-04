import { TestBed } from '@angular/core/testing';

import { EstaRegistradoService } from './esta-registrado.service';

describe('EstaRegistradoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstaRegistradoService = TestBed.get(EstaRegistradoService);
    expect(service).toBeTruthy();
  });
});
