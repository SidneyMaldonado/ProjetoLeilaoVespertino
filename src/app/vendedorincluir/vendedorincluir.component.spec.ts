import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorincluirComponent } from './vendedorincluir.component';

describe('VendedorincluirComponent', () => {
  let component: VendedorincluirComponent;
  let fixture: ComponentFixture<VendedorincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorincluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
