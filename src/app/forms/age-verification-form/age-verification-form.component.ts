import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../ui/button/button.component';
import { MatInputModule, MatLabel } from '@angular/material/input';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { AutoFocusDirective } from '../../utils/directives/autofocus.directive';
import { minimumAgeValidator } from '../../utils/validators/minimumAge';
import { AgeVerificationFormGroup } from '../../utils/types/forms.type';

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
      birthDay: this.formBuilder.control<string>('', [
        Validators.required,
        Validators.pattern('^(0[1-9]|[12][0-9]|3[01])$'),
      ]),
      birthMonth: this.formBuilder.control<string>('', [
        Validators.required,
        Validators.pattern('^(0[1-9]|1[0-2])$'),
      ]),
      birthYear: this.formBuilder.control<string>('', [
        Validators.required,
        Validators.pattern('^(19\\d{2}|20\\d{2}|2100)$'),
      ]),
    },
    { validators: [minimumAgeValidator(this.minimumAge)] },
  );

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(true);
    }
  }
}
