import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();

    // chekc returns of selectTheme method
    expect(service.selectTheme(10)).toBe('red');
    expect(service.selectTheme(-10)).toBe('green');
    expect(service.selectTheme(0)).toBe('');
  });
});
