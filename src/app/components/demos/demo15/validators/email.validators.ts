import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator (control: AbstractControl) {

    let error: ValidationErrors;

    if (control.value) {


        if (control.value.length <= 5) {
            error = { name: 'Votre email doit contenir au moins 6 caractères' };
            return error;
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(control.value)) {
            error = { name: 'Votre email ne respecte pas le format d\'un email.' };
            return error;
        }

        return null;
    }

    else {
        error = { name: 'Champ obligatoire' };
        return error;
    }

}