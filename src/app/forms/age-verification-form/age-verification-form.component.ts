import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { minimumAgeValidator } from '../../utils/validators/minimumAge';
import { ButtonComponent } from '../../ui/button/button.component';
import { MatHint, MatInputModule, MatLabel } from '@angular/material/input';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-age-verification-form',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    ButtonComponent,
    MatInputModule,
    MatFormFieldModule,
    MatLabel,
    MatDatepicker,
    MatDatepickerInput,
    MatHint,
    MatDatepickerToggle,
    MatIcon,
  ],
  templateUrl: './age-verification-form.component.html',
  styleUrl: './age-verification-form.component.scss',
})
export class AgeVerificationFormComponent {
  private readonly formBuilder = new FormBuilder().nonNullable;
  @Output() formSubmit = new EventEmitter<boolean>();

  form = this.formBuilder.group({
    birthDate: this.formBuilder.control<string>('', [
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
