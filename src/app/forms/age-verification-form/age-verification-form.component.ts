import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { minimumAgeValidator } from '../../utils/form-validators/minimumAge.directive';

@Component({
  selector: 'app-age-verification-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './age-verification-form.component.html',
  styleUrl: './age-verification-form.component.scss',
})
export class AgeVerificationFormComponent {
  private readonly formBuilder = new FormBuilder().nonNullable;

  form = this.formBuilder.group({
    birthDate: this.formBuilder.control<Date>(new Date(), [
      Validators.required,
      minimumAgeValidator(18),
    ]),
  });

  getBirthDateFC() {
    return this.form.controls.birthDate;
  }
}
