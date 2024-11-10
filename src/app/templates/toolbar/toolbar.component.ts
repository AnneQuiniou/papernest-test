import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbar, MatIcon, MatIconButton],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  readonly appTitle = 'Test Papernest';
  @Output() toggleMenu = new EventEmitter<boolean>();

  onClick(): void {
    this.toggleMenu.emit(true);
  }
}
