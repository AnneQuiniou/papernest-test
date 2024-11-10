import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** The date entered must be over or equal to 18 years ago */
export function minimumAgeValidator(age: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const maximumDay = new Date().getDate();
    const maximumMonth = new Date().getMonth();
    const maximumYear = new Date().getFullYear() - age;

    const providedDay = new Date(control.value).getDate();
    const providedMonth = new Date(control.value).getMonth();
    const providedYear = new Date(control.value).getFullYear();

    const error = { overEighteen: { value: control.value } };

    if (providedYear > maximumYear) {
      return error;
    }

    if (providedMonth > maximumMonth) {
      return error;
    }

    if (providedDay > maximumDay) {
      return error;
    }

    return null;
  };
}
