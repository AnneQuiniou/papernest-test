import { Component, input } from '@angular/core';
import { MenuItem } from '../../utils/types/menu.type';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  item = input.required<MenuItem>();

}
