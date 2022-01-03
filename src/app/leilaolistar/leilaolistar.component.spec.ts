import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeilaolistarComponent } from './leilaolistar.component';

describe('LeilaolistarComponent', () => {
  let component: LeilaolistarComponent;
  let fixture: ComponentFixture<LeilaolistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaolistarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaolistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
