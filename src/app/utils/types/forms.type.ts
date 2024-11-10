import { FormControl } from '@angular/forms';

export interface AgeVerificationFormGroup {
  birthDay: FormControl<string>;
  birthMonth: FormControl<string>;
  birthYear: FormControl<string>;
}
