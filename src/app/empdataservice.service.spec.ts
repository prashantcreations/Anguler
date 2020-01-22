import { TestBed } from '@angular/core/testing';

import { EmpdataserviceService } from './empdataservice.service';

describe('EmpdataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpdataserviceService = TestBed.get(EmpdataserviceService);
    expect(service).toBeTruthy();
  });
});
