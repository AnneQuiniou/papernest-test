import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-default-layout-toolbar',
  standalone: true,
  imports: [MatToolbar, MatIcon, MatIconButton],
  templateUrl: './default-layout-toolbar.component.html',
  styleUrl: './default-layout-toolbar.component.scss',
})
export class DefaultLayoutToolbarComponent {
  readonly appTitle = $localize`Papernest | technical test`;
  @Output() toggleMenu = new EventEmitter<boolean>();

  onClick(): void {
    this.toggleMenu.emit(true);
  }
}
