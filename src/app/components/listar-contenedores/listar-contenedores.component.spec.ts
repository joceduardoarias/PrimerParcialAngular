import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarContenedoresComponent } from './listar-contenedores.component';

describe('ListarContenedoresComponent', () => {
  let component: ListarContenedoresComponent;
  let fixture: ComponentFixture<ListarContenedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarContenedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarContenedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
