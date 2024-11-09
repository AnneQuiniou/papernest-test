import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter/counter.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter-value',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter-value.component.html',
  styleUrl: './counter-value.component.scss',
})
export class CounterValueComponent {
  readonly counterService = inject(CounterService);
  count$: Observable<number> = this.counterService.getCount();
}
