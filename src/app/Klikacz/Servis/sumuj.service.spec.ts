import { TestBed } from '@angular/core/testing';

import { SumujService } from './sumuj.service';

describe('SumujService', () => {
  let service: SumujService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumujService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
