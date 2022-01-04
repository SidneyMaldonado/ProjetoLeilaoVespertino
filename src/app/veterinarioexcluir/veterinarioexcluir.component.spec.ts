import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioexcluirComponent } from './veterinarioexcluir.component';

describe('VeterinarioexcluirComponent', () => {
  let component: VeterinarioexcluirComponent;
  let fixture: ComponentFixture<VeterinarioexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinarioexcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
