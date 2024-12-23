import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {

  const t = inject(Router);


  const isAuthenticated = sessionStorage.getItem('isAuthenticated');

  if (isAuthenticated) {
    return true;
  } else {
    t.navigate(['/login']);
    return false;
  }
  }


