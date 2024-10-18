import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // Récupérer le token stocké dans le localstorage
  const authToken = localStorage.getItem('authToken');
  console.log("TokenInterceptor  intercept  authToken:", authToken);

  // Vérifier s'il y a un token et qu'il n'est pas vide
  if (authToken && authToken != '') {
    console.log("TokenInterceptor  intercept  authToken:", authToken);
    // Cloner la requête et ajouter l'en-tête d'authentification
    const authReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + authToken
      }
    });

    // Ajouter dans les providers du module l'interceptor
    return next(authReq);
  }

  return next(req);
};
