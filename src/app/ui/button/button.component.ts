import { Component, EventEmitter, input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButton],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Output() clicked = new EventEmitter<boolean>();
  disabled = input<boolean>();

  onClick(): void {
    this.clicked.emit(true);
  }
}
