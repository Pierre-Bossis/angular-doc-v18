import { AbstractControl, ValidationErrors } from "@angular/forms";

export function nameValidator (control: AbstractControl) {

    let error: ValidationErrors;

    if (control.value) {

        if (control.value.length <= 2) {
            error = { name: 'Votre nom doit contenir au moins 3 caractères.' };
            return error;
        }

        if (control.value === 'test') {
            error = { name: 'Votre nom n\'est pas test.' };
            return error;
        }

        return null;
    }

    else {
        error = { name: 'Champ obligatoire' };
        return error;
    }

}