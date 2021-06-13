import { TestBed } from '@angular/core/testing';

import { UdashService } from './udash.service';

describe('UdashService', () => {
  let service: UdashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UdashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
