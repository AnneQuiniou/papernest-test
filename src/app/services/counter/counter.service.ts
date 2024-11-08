import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private actionCount = 0;
  private count = 1;
  private readonly count$: BehaviorSubject<number> = new BehaviorSubject(
    this.count
  );

  updateCount(increase: boolean) {
    this.actionCount += 1;

    if (this.actionCount % 30 == 0) {
      this.count = this.count * 30;
    } else {
      let increment = 1;

      if (!increase) {
        increment = -1;
      }

      this.count += increment;
    }

    this.count$.next(this.count);
  }

  resetCounter(): void {
    this.count = 0;
    this.count$.next(this.count);
  }

  getCount(): Observable<number> {
    return this.count$.asObservable();
  }
}
