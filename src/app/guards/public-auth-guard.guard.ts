import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { protectedRoutes } from '../app.routes';

export const publicAuthGuardGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const currentHandle = state.url.split('/')[1];

  const isUserLoggedIn = localStorage.getItem('isLoggedIn') ? true : false;

  if (isUserLoggedIn && !protectedRoutes.includes(currentHandle)) {
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};
