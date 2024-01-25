import { TestBed } from '@angular/core/testing';

import { AdsDatabaseService } from './ads-database.service';

describe('AdsDatabaseService', () => {
  let service: AdsDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
