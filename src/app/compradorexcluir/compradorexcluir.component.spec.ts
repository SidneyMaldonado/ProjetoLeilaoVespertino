import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorexcluirComponent } from './compradorexcluir.component';

describe('CompradorexcluirComponent', () => {
  let component: CompradorexcluirComponent;
  let fixture: ComponentFixture<CompradorexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradorexcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
