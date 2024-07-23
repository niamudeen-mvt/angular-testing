import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { publicRoutes } from '../app.routes';

export const privateAuthGuardGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const currentHandle = state.url.split('/')[1];

  const isUserLoggedIn = localStorage.getItem('isLoggedIn') ? true : false;

  if (!isUserLoggedIn && !publicRoutes.includes(currentHandle)) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
