import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ThemeColor } from '../../utils/types/theme.type';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly thresholdValue = 9;
  private readonly theme$ = new BehaviorSubject('');

  /**
   * Returns the theme color to apply for a specified number value
   * @param {number} value
   * @returns {ThemeColor} Theme color
   */
  selectTheme(value: number): ThemeColor {
    if (value > this.thresholdValue) {
      return 'red';
    }
    if (value < -this.thresholdValue) {
      return 'green';
    }

    return '';
  }

  /**
   * Based on value provided, returns an observable providing the theme color
   *
   * @param value
   * @returns {Observable<ThemeColor>}
   */
  getTheme(value: number): Observable<ThemeColor> {
    return this.theme$.asObservable().pipe(
      map(() => {
        return this.selectTheme(value);
      }),
    );
  }
}
