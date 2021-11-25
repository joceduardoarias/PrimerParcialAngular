import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarConetendorComponent } from './modificar-conetendor.component';

describe('ModificarConetendorComponent', () => {
  let component: ModificarConetendorComponent;
  let fixture: ComponentFixture<ModificarConetendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarConetendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarConetendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
