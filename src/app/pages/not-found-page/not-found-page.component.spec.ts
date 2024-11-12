import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPageComponent } from './not-found-page.component';
import { ActivatedRoute } from '@angular/router';

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async () => {
    const activatedRouteMock = {
      snapshot: {
        url: '',
        title: 'test',
      },
    };

    await TestBed.configureTestingModule({
      imports: [NotFoundPageComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should pull title from route', () => {
    expect(component.pageTitle).toBe('test');
  });
});
