import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearGrupoComponent } from './ruta-crear-grupo.component';

describe('RutaCrearGrupoComponent', () => {
  let component: RutaCrearGrupoComponent;
  let fixture: ComponentFixture<RutaCrearGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
