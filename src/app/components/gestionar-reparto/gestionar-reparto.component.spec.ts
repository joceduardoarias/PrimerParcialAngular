import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarRepartoComponent } from './gestionar-reparto.component';

describe('GestionarRepartoComponent', () => {
  let component: GestionarRepartoComponent;
  let fixture: ComponentFixture<GestionarRepartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarRepartoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarRepartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
