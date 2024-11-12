import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideLocationMocks } from '@angular/common/testing';
import { provideRouter, Router, TitleStrategy } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { TitleStrategyService } from './title-strategy.service';

@Component({ template: '' })
export class TestComponent {}
describe('TitleStrategyService', () => {
  let service: TitleStrategyService;
  let router: Router;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideLocationMocks(),
        provideRouter([]),
        {
          provide: TitleStrategy,
          useClass: TitleStrategyService,
        },
      ],
    });
    router = TestBed.inject(Router);
    document = TestBed.inject(DOCUMENT);
    service = TestBed.inject(TitleStrategyService);
  });
  it('should set page title correctly when title is not provided', fakeAsync(() => {
    router.resetConfig([
      {
        path: 'home',
        component: TestComponent,
      },
    ]);
    router.navigateByUrl('/home');
    tick();
    expect(document.title).toBe('Papernest Technical Test');
  }));
  it('should set page title correctly when title is empty string', fakeAsync(() => {
    router.resetConfig([
      {
        path: 'home',
        title: '',
        component: TestComponent,
      },
    ]);
    router.navigateByUrl('/home');
    tick();
    expect(document.title).toBe('Papernest Technical Test');
  }));
  it('should set page title correctly when title is provided', fakeAsync(() => {
    Object.defineProperty(service, 'appTitle', {
      value: 'test',
      writable: true,
    });

    router.resetConfig([
      {
        path: 'home',
        title: 'Home',
        component: TestComponent,
      },
    ]);
    router.navigateByUrl('/home');
    tick();
    expect(document.title).toBe('Home | Papernest Technical Test');
  }));
});
