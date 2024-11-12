import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should store value in sessionStorage', () => {
    window.sessionStorage.clear();
    service.write('count', 9);
    expect(window.sessionStorage.getItem('count')).toEqual('9');
  });

  it('should read stored value from sessionStorage', () => {
    window.sessionStorage.clear();
    window.sessionStorage.setItem('count', '10');
    expect(service.read('count') == 10).toBeTruthy();
  });
  it('should remove stored value from sessionStorage', () => {
    window.sessionStorage.clear();
    window.sessionStorage.setItem('count', '10');
    service.remove('count');
    expect(window.sessionStorage.getItem('count')).toBeNull();
  });
});
