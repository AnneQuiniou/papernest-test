import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should reset count to original count', () => {
    const originalCountValue = 10;
    Object.defineProperty(service, 'originalCount', {
      value: originalCountValue,
      writable: true,
    });

    service.resetCounter();
    service.getCount().subscribe((count) => {
      expect(count).toEqual(originalCountValue);
    });
  });

  it('should increase count by one', () => {
    Object.defineProperty(service, 'count', {
      value: 5,
      writable: true,
    });

    Object.defineProperty(service, 'actionCount', {
      value: 1,
      writable: true,
    });

    service.updateCount(true);
    service.getCount().subscribe((count) => {
      expect(count).toEqual(6);
    });
  });

  it('should decrease count by one', () => {
    Object.defineProperty(service, 'count', {
      value: 5,
      writable: true,
    });

    Object.defineProperty(service, 'actionCount', {
      value: 1,
      writable: true,
    });

    service.updateCount(false);
    service.getCount().subscribe((count) => {
      expect(count).toEqual(4);
    });
  });

  it('should multiply by two', () => {
    Object.defineProperty(service, 'count', {
      value: 5,
      writable: true,
    });

    Object.defineProperty(service, 'multiplierValue', {
      value: 2,
      writable: true,
    });

    Object.defineProperty(service, 'actionCount', {
      value: 10,
      writable: true,
    });

    Object.defineProperty(service, 'threshold', {
      value: 10 + 1,
      writable: true,
    });

    service.updateCount(true);
    service.getCount().subscribe((count) => {
      expect(count).toEqual(5 * 2);
    });
  });
});
