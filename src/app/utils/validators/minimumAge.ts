import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** The date entered must be over or equal to 18 years ago */
export function minimumAgeValidator(age: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    //const dateFormat = `^(?:(?:(?:0?[13578]|1[02])(/|-|.)31)\\1|(?:(?:0?[1,3-9]|1[0-2])(/|-|.)(?:29|30)\\2))(?:(?:1[6-9]|[2-9]d)?d{2})$|^(?:0?2(/|-|.)29\\3(?:(?:(?:1[6-9]|[2-9]d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(/|-|.)(?:0?[1-9]|1d|2[0-8])\\4(?:(?:1[6-9]|[2-9]d)?d{2})$`;

    const testFormat = new RegExp(
      '^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]d{4}$',
    );
    const error = { overEighteen: { value: control.value } };

    if (!testFormat.test(control.value)) {
      console.log('error', testFormat.test(control.value));
      console.log('error');
      return error;
    }

    console.log(control.value);
    console.log(new Date(control.value));
    const providedDay = new Date(control.value).getDate();
    const providedMonth = new Date(control.value).getMonth();
    const providedYear = new Date(control.value).getFullYear();

    const maximumDay = new Date().getDate();
    const maximumMonth = new Date().getMonth();
    const maximumYear = new Date().getFullYear() - age;

    if (!providedYear || providedYear > maximumYear) {
      return error;
    }

    if (!providedMonth || providedMonth > maximumMonth) {
      return error;
    }

    if (!providedDay || providedDay > maximumDay) {
      return error;
    }

    return null;
  };
}
