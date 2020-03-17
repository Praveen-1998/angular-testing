import { TestBed } from '@angular/core/testing';

import { ClientRequirementInformationService } from './client-requirement-information.service';

describe('ClientRequirementInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientRequirementInformationService = TestBed.get(ClientRequirementInformationService);
    expect(service).toBeTruthy();
  });
});
