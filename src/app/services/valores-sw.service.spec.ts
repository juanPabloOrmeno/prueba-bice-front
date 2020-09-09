import { TestBed } from '@angular/core/testing';

import { ValoresSwService } from './valores-sw.service';

describe('ValoresSwService', () => {
  let service: ValoresSwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValoresSwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
