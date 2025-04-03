import { HttpInterceptorFn } from '@angular/common/http';

export const xsrfInterceptor: HttpInterceptorFn = (req, next) => {
  const xsrfToken = document.cookie
    .split('; ')
    .find((row) => row.startsWith('XSRF-TOKEN='))
    ?.split('=')[1];
  const clonedReq = req.clone({
    setHeaders: {
      'X-XSRF-TOKEN': xsrfToken || '',
    },
  });
  return next(clonedReq);
};
