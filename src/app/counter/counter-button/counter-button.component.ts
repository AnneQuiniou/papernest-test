import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.scss',
})
export class CounterButtonComponent {
  private readonly click = new EventEmitter<boolean>();

  onClick(): void {
    this.click.emit(true);
  }
}
