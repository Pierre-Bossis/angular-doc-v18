import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  console.log("component:", component);
  console.log("currentRoute:", currentRoute);
  console.log("currentState:", currentState);
  console.log("nextState:", nextState);

  // return true; // Autoriser la navigation
  // return false; // Refuser la navigation

  return confirm("Voulez-vous quitter cette page.");
};
