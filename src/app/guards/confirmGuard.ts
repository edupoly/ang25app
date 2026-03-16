import { CanDeactivateFn } from '@angular/router';

export const confirmGuard: CanDeactivateFn<any> = () => {
  return window.confirm();
};
