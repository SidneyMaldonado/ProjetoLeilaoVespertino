import { TestBed } from '@angular/core/testing';
import { LanceService } from './lance.service';

describe('LanceService', () => {
  let service: LanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
