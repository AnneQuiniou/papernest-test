import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from '../app.routes';
import { TitleStrategyService } from '../services/title-strategy/title-strategy.service';
import { appInitializerProviders } from './app-initializers';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: TitleStrategy,
      useClass: TitleStrategyService,
    },
    ...appInitializerProviders,
    provideHttpClient(), provideAnimationsAsync(),
  ],
};
