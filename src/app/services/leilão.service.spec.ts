import { TestBed } from '@angular/core/testing';

import { LeilãoService } from './leilão.service';

describe('LeilãoServiceService', () => {
  let service: LeilãoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeilãoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
