import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BROWSER_STORAGE } from './storage';

export const authGuard: CanActivateFn = () => {
  const storage = inject(BROWSER_STORAGE);
  const router = inject(Router);

  const token = storage.getItem('travlr-token');

  if (token) {
    return true;
  }

  return router.createUrlTree(['/login']);
};