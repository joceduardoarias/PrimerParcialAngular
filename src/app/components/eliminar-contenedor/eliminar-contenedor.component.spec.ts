import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarContenedorComponent } from './eliminar-contenedor.component';

describe('EliminarContenedorComponent', () => {
  let component: EliminarContenedorComponent;
  let fixture: ComponentFixture<EliminarContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarContenedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
