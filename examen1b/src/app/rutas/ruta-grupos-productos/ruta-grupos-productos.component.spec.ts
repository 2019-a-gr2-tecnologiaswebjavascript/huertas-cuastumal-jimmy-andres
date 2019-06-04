import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGruposProductosComponent } from './ruta-grupos-productos.component';

describe('RutaGruposProductosComponent', () => {
  let component: RutaGruposProductosComponent;
  let fixture: ComponentFixture<RutaGruposProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGruposProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGruposProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
