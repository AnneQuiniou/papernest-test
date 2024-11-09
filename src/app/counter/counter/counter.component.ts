import { ButtonComponent } from '../../ui/button/button.component';
import { CounterValueComponent } from '../counter-value/counter-value.component';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterValueComponent, ButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  updateCount = new EventEmitter<boolean>();

  onClick() {
    this.updateCount.emit(true);
  }
}
