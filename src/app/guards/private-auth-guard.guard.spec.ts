import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { privateAuthGuardGuard } from './private-auth-guard.guard';

describe('privateAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => privateAuthGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
