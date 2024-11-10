import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private readonly thresholdValue = 9;

  private readonly color$: BehaviorSubject<string> = new BehaviorSubject('');

  selectColor(value: number) {
    if (value > this.thresholdValue) {
      return 'red';
    }
    if (value < -this.thresholdValue) {
      return 'green';
    }

    return '';
  }

  getColor(value: number): Observable<string> {
    return this.color$.asObservable().pipe(
      map(() => {
        return this.selectColor(value);
      }),
    );
  }
}
