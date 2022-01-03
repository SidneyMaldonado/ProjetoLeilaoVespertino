import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioincluirComponent } from './veterinarioincluir.component';

describe('VeterinarioincluirComponent', () => {
  let component: VeterinarioincluirComponent;
  let fixture: ComponentFixture<VeterinarioincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinarioincluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
