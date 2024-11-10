import { Component, EventEmitter, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  private readonly click = new EventEmitter<boolean>();
  disabled = input<boolean>();

  onClick(): void {
    this.click.emit(true);
  }
}