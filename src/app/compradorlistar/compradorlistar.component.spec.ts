import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorlistarComponent } from './compradorlistar.component';

describe('CompradorlistarComponent', () => {
  let component: CompradorlistarComponent;
  let fixture: ComponentFixture<CompradorlistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradorlistarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorlistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
