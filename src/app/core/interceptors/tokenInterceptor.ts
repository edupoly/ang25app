import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = window.localStorage.getItem('token');

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(cloned);
  }

  return next(req);
};

/**
 * To use this interceptor, add it to the provideHttpClient in app.config.ts:
 * provideHttpClient(withInterceptors([authInterceptor]))
 */
