import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../ui/button/button.component';
import { MatInputModule, MatLabel } from '@angular/material/input';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { AutoFocusDirective } from '../../utils/directives/auto-focus.directive';
import { minimumAgeValidator } from '../../utils/validators/minimumAge';
import { AgeVerificationFormGroup } from '../../utils/types/forms.type';
import { existingDateValidator } from '../../utils/validators/existingDate';

@Component({
  selector: 'app-age-verification-form',
  standalone: true,
  imports: [
    AutoFocusDirective,
    ReactiveFormsModule,
    ButtonComponent,
    MatInputModule,
    MatHint,
    MatFormFieldModule,
    MatLabel,
  ],
  templateUrl: './age-verification-form.component.html',
  styleUrl: './age-verification-form.component.scss',
})
export class AgeVerificationFormComponent {
  private readonly formBuilder = new FormBuilder().nonNullable;
  @Output() formSubmit = new EventEmitter<boolean>();
  minimumAge = 18;

  form = this.formBuilder.group<AgeVerificationFormGroup>(
    {
      birthDay: this.formBuilder.control<number | null>(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(31),
      ]),
      birthMonth: this.formBuilder.control<number | null>(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(12),
      ]),
      birthYear: this.formBuilder.control<number | null>(null, [
        Validators.required,
        Validators.min(1900),
        Validators.max(2100),
      ]),
    },
    {
      validators: [
        minimumAgeValidator(this.minimumAge),
        existingDateValidator(),
      ],
    },
  );

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(true);
    }
  }
}
