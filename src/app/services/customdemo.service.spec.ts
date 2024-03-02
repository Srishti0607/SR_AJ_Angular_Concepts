import { TestBed } from '@angular/core/testing';

import { CustomdemoService } from './customdemo.service';

describe('CustomdemoService', () => {
  let service: CustomdemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomdemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
