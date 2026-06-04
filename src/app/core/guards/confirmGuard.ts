import { CanDeactivateFn } from '@angular/router';

export const confirmGuard: CanDeactivateFn<any> = () => {
  return window.confirm('Are you sure you want to leave this page?');
};
