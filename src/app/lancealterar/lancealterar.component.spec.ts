import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancealterarComponent } from './lancealterar.component';

describe('LancealterarComponent', () => {
  let component: LancealterarComponent;
  let fixture: ComponentFixture<LancealterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancealterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancealterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
