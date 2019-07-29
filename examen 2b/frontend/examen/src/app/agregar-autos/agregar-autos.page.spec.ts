import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAutosPage } from './agregar-autos.page';

describe('AgregarAutosPage', () => {
  let component: AgregarAutosPage;
  let fixture: ComponentFixture<AgregarAutosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarAutosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
