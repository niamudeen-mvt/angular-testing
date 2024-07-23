import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { publicAuthGuardGuard } from './public-auth-guard.guard';

describe('publicAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => publicAuthGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
