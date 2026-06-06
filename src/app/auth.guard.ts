import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = window.localStorage.getItem('token');
  if (!token) {
    return false;
  }
  return true;
};
