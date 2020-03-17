import { TestBed } from '@angular/core/testing';

import { ReqirementStatusService } from './reqirement-status.service';

describe('ReqirementStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReqirementStatusService = TestBed.get(ReqirementStatusService);
    expect(service).toBeTruthy();
  });
});
