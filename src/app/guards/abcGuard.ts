import { CanActivateFn } from '@angular/router';

export const abcGuard: CanActivateFn = () => {
  //checking login for user role and authentication
  //if user logs in returns true
  //else returns false
  return false;
};
