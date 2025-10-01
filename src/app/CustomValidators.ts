import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
export function checkAge(control: FormControl) {
  if (control.value > 25) {
    return { ageError: 'you are too old' };
  } else {
    return null;
  }
}
