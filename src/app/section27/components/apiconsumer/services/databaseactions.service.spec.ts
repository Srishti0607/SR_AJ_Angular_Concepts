import { TestBed } from '@angular/core/testing';

import { DatabaseactionsService } from './databaseactions.service';

describe('DatabaseactionsService', () => {
  let service: DatabaseactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
