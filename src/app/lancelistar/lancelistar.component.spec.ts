import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancelistarComponent } from './lancelistar.component';

describe('LancelistarComponent', () => {
  let component: LancelistarComponent;
  let fixture: ComponentFixture<LancelistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancelistarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancelistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
