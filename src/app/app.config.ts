import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TemplatePageTitleStrategy } from './shared/TemplatePageTitleStrategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()), // using withComponentInputBinding to pass input bindings to components
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
  ],
};
