import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutComponent } from './default-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';

describe('DefaultLayoutComponent', () => {
  let component: DefaultLayoutComponent;
  let fixture: ComponentFixture<DefaultLayoutComponent>;

  beforeEach(async () => {
    const activatedRouteMock = {
      snapshot: {
        url: 'up',
      },
    };

    await TestBed.configureTestingModule({
      imports: [DefaultLayoutComponent, BrowserAnimationsModule],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
