import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { ActivatedRoute } from '@angular/router';
import { operationUp } from '../../utils/types/updates.type';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  const activatedRouteMock = {
    snapshot: {
      url: 'up',
      title: 'up',
      data: { ...operationUp },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent, MenuItemComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
