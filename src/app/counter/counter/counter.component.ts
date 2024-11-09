import { Component, EventEmitter } from '@angular/core';
import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { CounterValueComponent } from '../counter-value/counter-value.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterButtonComponent, CounterValueComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  updateCount = new EventEmitter<boolean>();

  onClick() {
    this.updateCount.emit(true);
  }
}
