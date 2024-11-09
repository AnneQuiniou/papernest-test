import { APP_INITIALIZER } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { addIcons } from './add-icons';

/**
 * Array of providers for the APP_INITIALIZER token.
 * @see {@link https://angular.dev/api/core/APP_INITIALIZER}.
 */
export const appInitializerProviders = [
  {
    provide: APP_INITIALIZER,
    useFactory: addIcons,
    deps: [MatIconRegistry, DomSanitizer],
    multi: true,
  },
];
