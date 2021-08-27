import { TestBed } from '@angular/core/testing';

import { BackendfarmerService } from './backendfarmer.service';

describe('BackendfarmerService', () => {
  let service: BackendfarmerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendfarmerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
