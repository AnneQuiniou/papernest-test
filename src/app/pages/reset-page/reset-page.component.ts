import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter/counter.service';
import { CounterValueComponent } from '../../counter/counter-value/counter-value.component';
import { AgeVerificationFormComponent } from '../../forms/age-verification-form/age-verification-form.component';

@Component({
  selector: 'app-reset-page',
  standalone: true,
  imports: [AgeVerificationFormComponent, CounterValueComponent],
  templateUrl: './reset-page.component.html',
  styleUrl: './reset-page.component.scss',
})
export class ResetPageComponent {
  private readonly counterService = inject(CounterService);

  onFormSubmit(event: Event) {
    console.log('here', event);
    this.counterService.resetCounter();
  }
}
