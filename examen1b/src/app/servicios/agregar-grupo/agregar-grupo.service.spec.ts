import { TestBed } from '@angular/core/testing';

import { AgregarGrupoService } from './agregar-grupo.service';

describe('AgregarGrupoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgregarGrupoService = TestBed.get(AgregarGrupoService);
    expect(service).toBeTruthy();
  });
});
