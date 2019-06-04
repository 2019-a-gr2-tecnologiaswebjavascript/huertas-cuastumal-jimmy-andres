import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGruposComponent } from './ruta-grupos.component';

describe('RutaGruposComponent', () => {
  let component: RutaGruposComponent;
  let fixture: ComponentFixture<RutaGruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGruposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
