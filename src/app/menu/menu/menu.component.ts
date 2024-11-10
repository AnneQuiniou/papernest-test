import { Component } from '@angular/core';
import { menu } from '../menu-items';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatMenu, MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  menu = menu;
}
