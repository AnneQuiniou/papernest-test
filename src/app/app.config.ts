import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { TitleStrategyService } from './services/title-strategy/title-strategy.service';
import { appInitializerProviders } from './providers/app-initializers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: TitleStrategy,
      useClass: TitleStrategyService,
    },
    ...appInitializerProviders,
  ],
};
