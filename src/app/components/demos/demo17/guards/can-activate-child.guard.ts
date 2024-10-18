import { CanActivateChildFn } from '@angular/router';

export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
  // return true; // Autoriser la route vers l'enfant
  // return false; // Refuser la route vers l'enfant

  return confirm("Voulez-vous vous rendre chez l'enfant ?");
};
