import { Component, inject, ViewChild } from '@angular/core';
import { AgeVerificationFormComponent } from '../../forms/age-verification-form/age-verification-form.component';
import { CounterService } from '../../services/counter/counter.service';
import { CounterValueComponent } from '../../counter/counter-value/counter-value.component';

@Component({
  selector: 'app-reset-page',
  standalone: true,
  imports: [AgeVerificationFormComponent, CounterValueComponent],
  templateUrl: './reset-page.component.html',
  styleUrl: './reset-page.component.scss',
})
export class ResetPageComponent {
  @ViewChild(AgeVerificationFormComponent)
  form!: AgeVerificationFormComponent;
  private readonly counterService = inject(CounterService);

  submitForm() {
    if (this.form.getBirthDateFC().valid) {
      this.counterService.resetCounter();
    }
  }
}
