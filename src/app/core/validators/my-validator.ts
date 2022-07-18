import { AbstractControl } from "@angular/forms";

export function MyValidator(control: AbstractControl) {

  if(!control.value.startsWith('sal')){
    return {
      myValidator: true
    }
  }

  return null;
}
