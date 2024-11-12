import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should return empty string if not under minus the thresholdValue or over the thresholdValue ', () => {
    Object.defineProperty(service, 'thresholdValue', {
      value: 9,
      writable: true,
    });

    expect(service.selectTheme(0)).toBe('');
  });

  it('should return red over thresholdValue', () => {
    Object.defineProperty(service, 'thresholdValue', {
      value: 9,
      writable: true,
    });

    expect(service.selectTheme(10)).toBe('red');
  });

  it('should return green under minus the thresholdValue', () => {
    Object.defineProperty(service, 'thresholdValue', {
      value: 9,
      writable: true,
    });

    expect(service.selectTheme(-10)).toBe('green');
  });
});
