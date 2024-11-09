import { Component, EventEmitter } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbar, MatIcon],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  readonly appTitle = 'Test Papernest';
  private readonly toggleMenu = new EventEmitter<boolean>();

  onClick(): void {
    this.toggleMenu.emit();
  }
}
