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
      data: { icon: 'test' },
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

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.pageTitle).toBe('reset');
  });
});
