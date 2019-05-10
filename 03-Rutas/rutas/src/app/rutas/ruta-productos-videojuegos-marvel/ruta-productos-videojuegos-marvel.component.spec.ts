import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosVideojuegosMarvelComponent } from './ruta-productos-videojuegos-marvel.component';

describe('RutaProductosVideojuegosMarvelComponent', () => {
  let component: RutaProductosVideojuegosMarvelComponent;
  let fixture: ComponentFixture<RutaProductosVideojuegosMarvelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosVideojuegosMarvelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosVideojuegosMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
