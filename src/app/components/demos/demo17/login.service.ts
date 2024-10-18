import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isConnected: boolean = false;

  constructor () { }

  logIn (): void {
    this.isConnected = true;
  }

  logOut (): void {
    this.isConnected = false;
  }
}
