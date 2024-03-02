import { TestBed } from '@angular/core/testing';

import { CustomsharedService } from './customshared.service';

describe('CustomsharedService', () => {
  let service: CustomsharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomsharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
