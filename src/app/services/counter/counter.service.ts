import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private readonly originalCount = 1;
  private readonly incrementValue = 1;
  private readonly multiplierValue = 2;
  private readonly threshholdValue = 30;

  private actionCount = 0;
  private count = this.originalCount;
  private readonly count$: BehaviorSubject<number> = new BehaviorSubject(
    this.count,
  );

  updateCount(increase: boolean) {
    this.actionCount += this.incrementValue;

    if (this.actionCount % this.threshholdValue == 0) {
      this.count = this.count * this.multiplierValue;
    } else {
      let increment = this.incrementValue;

      if (!increase) {
        increment = -this.incrementValue;
      }

      this.count += increment;
    }

    this.count$.next(this.count);
  }

  resetCounter(): void {
    this.count = this.originalCount;
    this.count$.next(this.count);
  }

  getCount(): Observable<number> {
    return this.count$.asObservable();
  }
}
