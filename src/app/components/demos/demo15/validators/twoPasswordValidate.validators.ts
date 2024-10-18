import { AbstractControl, ValidationErrors } from "@angular/forms";

export function twoPasswordCheckValidator (controlGroup: AbstractControl) {

    let errors: ValidationErrors;

    if (controlGroup.value.password && controlGroup.value.passwordVerify) {

        if (controlGroup.value.password !== controlGroup.value.passwordVerify) {
            return { twoPasswordCheck: "Mots de passe différents" };
        }

        return null;

    }

    else {
        errors = { twoPasswordCheck: "Champ obligatoire" };
        return errors;
    }

}