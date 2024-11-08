import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter/counter.service';
import { CounterComponent } from '../../counter/counter/counter.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.scss',
})
export class UpdatePageComponent {
  private readonly route = inject(ActivatedRoute);
  readonly counterService = inject(CounterService);
  operation?: string;
  pageTitle = 'Increase the counter';
  buttonText = 'Click to go up';

  ngOnInit() {
    this.operation = this.route.snapshot.data['operation'];

    if (this.operation == 'down') {
      this.pageTitle = 'Decrease the counter';
      this.buttonText = 'Click to go down';
    }
  }

  updateCount(): void {
    let increase = true;

    if (this.operation == 'down') {
      increase = false;
    }

    this.counterService.updateCount(increase);
  }
}
