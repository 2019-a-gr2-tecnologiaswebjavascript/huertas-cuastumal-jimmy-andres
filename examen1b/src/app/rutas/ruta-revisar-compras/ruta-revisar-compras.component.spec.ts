import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaRevisarComprasComponent } from './ruta-revisar-compras.component';

describe('RutaRevisarComprasComponent', () => {
  let component: RutaRevisarComprasComponent;
  let fixture: ComponentFixture<RutaRevisarComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaRevisarComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaRevisarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
