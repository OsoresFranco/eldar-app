import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const spinnerService = inject(SpinnerService);
  let activeRequests = 0;

  activeRequests++;
  spinnerService.show();

  return next(req).pipe(
    finalize(() => {
      activeRequests--;
      if (activeRequests === 0) {
        spinnerService.hide();
      }
    })
  );
};
