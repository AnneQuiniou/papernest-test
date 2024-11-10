/** The date entered must be over or equal to 18 years ago */

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function minimumAgeValidator(age: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const errorInvalid = { invalidData: { value: control.value } };
    const errorMinimumAge = { minimumAge: { value: control.value } };

    const providedDay = control.get('birthDay');
    const providedMonth = control.get('birthMonth');
    const providedYear = control.get('birthYear');

    const maximumDay = new Date().getDate();
    const maximumMonth = new Date().getMonth() + 1;
    const maximumYear = new Date().getFullYear() - age;

    if (
      providedDay?.invalid ||
      providedMonth?.invalid ||
      providedYear?.invalid
    ) {
      return errorInvalid;
    }

    if (providedYear?.value > maximumYear) {
      return errorMinimumAge;
    }

    if (providedYear?.value < maximumYear) {
      return null;
    }

    if (providedMonth?.value > maximumMonth) {
      return errorMinimumAge;
    }

    if (providedMonth?.value < maximumMonth) {
      return null;
    }

    if (providedDay?.value > maximumDay) {
      return errorMinimumAge;
    }

    if (providedDay?.value < maximumDay) {
      return null;
    }

    return null;
  };
}
