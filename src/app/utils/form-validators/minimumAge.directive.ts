import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** The date entered must be over or equal to 18 years ago */
export function minimumAgeValidator(age: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const currentDay = new Date().getDay();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const minimumDate = new Date(
      `${currentMonth - currentDay - (currentYear - age)}`
    );
    const providedDate = new Date(control.value);

    console.log('minimumDate', minimumDate);
    console.log('controle', control.value);
    console.log('providedDate', providedDate);
    console.log('minimumDate < providedDate', minimumDate < providedDate);

    return minimumDate < providedDate
      ? { overEighteen: { value: control.value } }
      : null;
  };
}
