import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorlistarComponent } from './vendedorlistar.component';

describe('VendedorlistarComponent', () => {
  let component: VendedorlistarComponent;
  let fixture: ComponentFixture<VendedorlistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorlistarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorlistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
