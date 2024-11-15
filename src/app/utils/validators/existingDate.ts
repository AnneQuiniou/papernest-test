/** The date entered must be over or equal to 18 years ago */

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function existingDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const errorInvalid = { invalidData: { value: control.value } };
    const errorDate = { date: { value: control.value } };

    const providedDay = control.get('birthDay');
    const providedMonth = control.get('birthMonth');
    const providedYear = control.get('birthYear');

    if (
      providedDay?.invalid ||
      providedMonth?.invalid ||
      providedYear?.invalid
    ) {
      return errorInvalid;
    }

    const providedDate = `${providedDay?.value}/${providedMonth?.value}/${providedYear?.value}`;

    const matchRegexp = String.raw`^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$`;

    if (providedDate.match(matchRegexp)) {
      return null;
    } else {
      return errorDate;
    }
  };
}
