import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimallistarComponent } from './animallistar.component';

describe('AnimallistarComponent', () => {
  let component: AnimallistarComponent;
  let fixture: ComponentFixture<AnimallistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimallistarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimallistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
