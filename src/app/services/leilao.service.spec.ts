import { TestBed } from '@angular/core/testing';

import { LeilaoService } from './leilao.service';

describe('LeilãoServiceService', () => {
  let service: LeilaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeilaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
