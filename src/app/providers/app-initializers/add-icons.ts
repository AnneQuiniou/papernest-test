import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { iconNames } from '../../ui/icons/icon-names';

/**
 * Function for the APP_INITIALIZER token:
 * Add SVG icons to the MatIconRegistry.
 * @see {@link https://material.angular.io/components/icon/overview#svg-icons}.
 */
export const addIcons = (
  matIconRegistry: MatIconRegistry,
  domSanitizer: DomSanitizer,
) => {
  return (): void => {
    iconNames.forEach((iconName) => {
      matIconRegistry.addSvgIcon(
        iconName,
        domSanitizer.bypassSecurityTrustResourceUrl(`icons/${iconName}.svg`),
      );
    });
  };
};
