import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanceexcluirComponent } from './lanceexcluir.component';

describe('LanceexcluirComponent', () => {
  let component: LanceexcluirComponent;
  let fixture: ComponentFixture<LanceexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanceexcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanceexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
