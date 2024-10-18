import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    { id: 1, nom: 'Dupont', prenom: 'Jean' },
    { id: 2, nom: 'Martin', prenom: 'Marie' },
    { id: 3, nom: 'Dubois', prenom: 'Pierre' },
  ];

  constructor () { }

  getUserById (id: string): any {
    return this.users.find(u => u.id === +id);
  }
}
