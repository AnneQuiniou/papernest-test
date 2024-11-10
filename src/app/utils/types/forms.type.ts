import { FormControl } from '@angular/forms';

export interface AgeVerificationFormGroup {
  birthDay: FormControl<number | null>;
  birthMonth: FormControl<number | null>;
  birthYear: FormControl<number | null>;
}
