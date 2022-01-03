import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorincluirComponent } from './compradorincluir.component';

describe('CompradorincluirComponent', () => {
  let component: CompradorincluirComponent;
  let fixture: ComponentFixture<CompradorincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradorincluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
