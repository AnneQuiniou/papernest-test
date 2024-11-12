import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePageComponent } from './update-page.component';
import { ActivatedRoute } from '@angular/router';
import { operationUp } from '../../utils/types/updates.type';

describe('UpdatePageComponent', () => {
  let component: UpdatePageComponent;
  let fixture: ComponentFixture<UpdatePageComponent>;
  const activatedRouteMock = {
    snapshot: {
      url: 'up',
      title: 'up',
      data: { ...operationUp, icon: 'test' },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePageComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should pull title from route', () => {
    expect(component.pageTitle).toBe('up');
  });

  it('should pull operation from route', () => {
    expect(component.operation).toBe('up');
  });
});
