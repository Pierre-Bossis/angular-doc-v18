import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { inject } from '@angular/core';

export const isauthGuard: CanActivateFn = (route, state) => {
  return inject(LoginService).isConnected
    ? true
    : inject(Router).createUrlTree(['/demo17']); // Pointer vers la page de connexion
};
