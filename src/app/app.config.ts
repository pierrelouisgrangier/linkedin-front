import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  provideHttpClient,
  withInterceptors,
  withXsrfConfiguration,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { authInterceptor } from './auth.interceptor';
import { xsrfInterceptor } from './xsrf.intercetor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, xsrfInterceptor]),
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN',
      })
    ),
    provideRouter(routes),
    provideAnimationsAsync(),
  ],
};
