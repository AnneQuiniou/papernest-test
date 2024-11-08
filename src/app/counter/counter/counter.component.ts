import { Component, EventEmitter, inject } from '@angular/core';
import { CounterService } from '../../services/counter/counter.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CounterButtonComponent } from '../counter-button/counter-button.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe, CounterButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  readonly counterService = inject(CounterService);

  updateCount = new EventEmitter<boolean>();
  count$: Observable<number> = this.counterService.getCount();

  onClick() {
    this.updateCount.emit(true);
  }
}
