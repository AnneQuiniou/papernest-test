import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPageComponent } from './reset-page.component';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ResetPageComponent', () => {
  let component: ResetPageComponent;
  let fixture: ComponentFixture<ResetPageComponent>;
  const activatedRouteMock = {
    snapshot: {
      url: 'reset',
      title: 'reset',
      data: { icon: 'reset' },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPageComponent, BrowserAnimationsModule],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ResetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should pull title from route', () => {
    expect(component.pageTitle).toBe('reset');
  });

  it('should pull icon from route', () => {
    expect(component.icon).toBe('reset');
  });
});
