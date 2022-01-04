import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalexcluirComponent } from './animalexcluir.component';

describe('AnimalexcluirComponent', () => {
  let component: AnimalexcluirComponent;
  let fixture: ComponentFixture<AnimalexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalexcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
