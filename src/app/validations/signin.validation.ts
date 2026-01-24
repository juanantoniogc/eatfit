import { AbstractControl, ValidationErrors } from "@angular/forms";

// Validador para contraseña fuerte
export function strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) {
    return null; // Dejamos que 'required' maneje el campo vacío
  }

  const hasUpperCase = /[A-Z]+/.test(value);
  const hasNumeric = /[0-9]+/.test(value);

  const passwordValid = hasUpperCase && hasNumeric;

  return passwordValid ? null : { weakPassword: true };
}

// Validador para confirmar contraseña
export function matchPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const confirmValue = control.value;
  const formGroup = control.parent;

  if (!formGroup) {
    return null;
  }

  const passwordControl = formGroup.get('password');
  const passwordValue = passwordControl?.value;

  if (!passwordValue || !confirmValue) {
    return null; // Dejamos que 'required' maneje campos vacíos
  }

  return passwordValue === confirmValue ? null : { mismatch: true };
}