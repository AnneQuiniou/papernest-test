import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { menu } from '../menu-items';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

describe('MenuComponent', () => {
  let fixture: ComponentFixture<MenuComponent>;
  const activatedRouteMock = {
    snapshot: {
      url: 'up',
      title: 'up',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent, MenuItemComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
  });

  it('should create as many menu items as in menu provided', () => {
    const length = menu.length;
    const numberCreated = fixture.debugElement.queryAll(
      By.css('app-menu-item'),
    ).length;

    expect(numberCreated).toEqual(length);
  });
});
