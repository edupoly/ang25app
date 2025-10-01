import { FormControl } from '@angular/forms';

export function checkAge(control: FormControl) {
  if (control.value > 25) {
    return { ageError: 'you are too old' };
  } else {
    return null;
  }
}
