import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariolistarComponent } from './veterinariolistar.component';

describe('VeterinariolistarComponent', () => {
  let component: VeterinariolistarComponent;
  let fixture: ComponentFixture<VeterinariolistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinariolistarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinariolistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
