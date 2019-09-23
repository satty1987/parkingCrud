import { TestBed } from '@angular/core/testing';

import { OktaAuthService } from './okta-auth.service';

describe('OktaAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OktaAuthService = TestBed.get(OktaAuthService);
    expect(service).toBeTruthy();
  });
});
