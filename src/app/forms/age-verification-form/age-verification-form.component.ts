import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { minimumAgeValidator } from '../../utils/form-validators/minimumAge';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-age-verification-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './age-verification-form.component.html',
  styleUrl: './age-verification-form.component.scss',
})
export class AgeVerificationFormComponent {
  private readonly formBuilder = new FormBuilder().nonNullable;
  formSubmit = new EventEmitter<boolean>();

  form = this.formBuilder.group({
    birthDate: this.formBuilder.control<Date>(new Date(), [
      Validators.required,
      minimumAgeValidator(18),
    ]),
  });

  getBirthDateFC() {
    return this.form.controls.birthDate;
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(true);
    }
  }
}
