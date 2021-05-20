import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPizzaComponent } from './eliminar-pizza.component';

describe('EliminarPizzaComponent', () => {
  let component: EliminarPizzaComponent;
  let fixture: ComponentFixture<EliminarPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
