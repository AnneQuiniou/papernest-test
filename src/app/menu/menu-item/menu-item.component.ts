import { Component, inject, input } from '@angular/core';
import { MenuItem } from '../../utils/types/menu.type';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  private readonly route = inject(Router);
  item = input.required<MenuItem>();
}
