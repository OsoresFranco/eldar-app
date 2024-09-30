import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const authToken = cookieService.get('authToken');

  let headers = req.headers;

  if (authToken) {
    headers = headers.set('Authorization', `Bearer ${authToken}`);
  }

  const clonedRequest = req.clone({ headers });

  return next(clonedRequest);
};
