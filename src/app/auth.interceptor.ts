import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let clonedReq = req.clone({
    setHeaders: {
      testheader: 'Test kosam',
    },
  });
  return next(clonedReq);
};
