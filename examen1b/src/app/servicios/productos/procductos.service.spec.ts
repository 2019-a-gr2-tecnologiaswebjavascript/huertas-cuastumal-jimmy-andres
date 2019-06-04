import { TestBed } from '@angular/core/testing';

import { ProcductosService } from './procductos.service';

describe('ProcductosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcductosService = TestBed.get(ProcductosService);
    expect(service).toBeTruthy();
  });
});
