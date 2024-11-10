import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** The date entered must be over or equal to 18 years ago */
export function dateFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dateFormat =
      '^(?:(?:(?:0?[13578]|1[02])(/|-|.)31)\x01|(?:(?:0?[1,3-9]|1[0-2])(/|-|.)(?:29|30)\x02))(?:(?:1[6-9]|[2-9]d)?d{2})$|^(?:0?2(/|-|.)29\x03(?:(?:(?:1[6-9]|[2-9]d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(/|-|.)(?:0?[1-9]|1d|2[0-8])\x04(?:(?:1[6-9]|[2-9]d)?d{2})$';

    return control.value.math(dateFormat)
      ? null
      : { dateFormat: { value: control.value } };
  };
}
