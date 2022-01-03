import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanceincluirComponent } from './lanceincluir.component';

describe('LanceincluirComponent', () => {
  let component: LanceincluirComponent;
  let fixture: ComponentFixture<LanceincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanceincluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanceincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
