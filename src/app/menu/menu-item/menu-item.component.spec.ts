import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemComponent } from './menu-item.component';
import { menu } from '../menu-items';
import { operationUp } from '../../utils/types/updates.type';
import { ActivatedRoute } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;
  const activatedRouteMock = {
    snapshot: {
      url: 'up',
      title: 'up',
      data: { ...operationUp },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemComponent, MatIcon],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('item', menu);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
