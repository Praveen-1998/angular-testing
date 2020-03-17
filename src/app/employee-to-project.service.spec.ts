import { TestBed } from '@angular/core/testing';

import { EmployeeToProjectService } from './employee-to-project.service';

describe('EmployeeToProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeToProjectService = TestBed.get(EmployeeToProjectService);
    expect(service).toBeTruthy();
  });
});
