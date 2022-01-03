import { TestBed } from '@angular/core/testing';

import { LeilãoServiceService } from './leilão-service.service';

describe('LeilãoServiceService', () => {
  let service: LeilãoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeilãoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
