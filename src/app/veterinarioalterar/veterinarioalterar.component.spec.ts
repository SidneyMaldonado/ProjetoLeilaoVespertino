import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioalterarComponent } from './veterinarioalterar.component';

describe('VeterinarioalterarComponent', () => {
  let component: VeterinarioalterarComponent;
  let fixture: ComponentFixture<VeterinarioalterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinarioalterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioalterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
