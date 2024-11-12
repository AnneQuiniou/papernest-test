import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private readonly storage = inject(StorageService);

  /**
   * The starting & reset value for the counter
   *
   * @private
   * @memberof CounterService
   */
  private readonly originalCount = 0;

  /**
   *Increment value used to increase or decrease the counter
   *
   * @private
   * @memberof CounterService
   */
  private readonly incrementValue = 1;

  /**
   * Multiplier value applied when count reaches threshold
   *
   * @private
   * @memberof CounterService
   */
  private readonly multiplierValue = 2;

  /**
   *Threshold value for which the multiplied is applied
   *
   * @private
   * @memberof CounterService
   */
  private readonly threshold = 30;

  /**
   *Count of all increase or decrease actions applied to the counter
   *
   * @private
   * @memberof CounterService
   */
  private actionCount = 0;

  /**
   * Set up first value of count as originaCount;
   *
   * @private
   * @memberof CounterService
   */
  private count = this.originalCount;

  /**
   * BehaviorSubject through which count values are broadcast
   *
   * @private
   * @memberof CounterService
   */
  private readonly count$ = new BehaviorSubject(this.count);

  /**
   * Based on increase parameter, either increases or decreases the value of the counter.
   * If the current actionCount is a multiple of the threshold value, applies multiplier instead.
   * Updates count$ BehaviorSubject with new value
   *
   * @param {boolean} increase
   */
  updateCount(increase: boolean): void {
    this.actionCount += this.incrementValue;

    if (this.actionCount % this.threshold == 0) {
      this.count = this.count * this.multiplierValue;
    } else {
      let increment = this.incrementValue;

      if (!increase) {
        increment = -this.incrementValue;
      }

      this.count += increment;
    }

    this.storage.write('count', this.count);
    this.count$.next(this.count);
  }

  /**
   * Resets count to originalCount value
   * Updates count$ BehaviorSubject with new value
   */
  resetCounter(): void {
    this.count = this.originalCount;
    this.storage.write('count', this.count);
    this.count$.next(this.count);
  }

  /**
   * Returns count value as an observable
   *
   * @returns {Observable<number>}
   */
  getCount(): Observable<number> {
    this.count = this.storage.read('count') ?? this.originalCount;
    this.count$.next(this.count);

    return this.count$.asObservable();
  }
}
