import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  private auth: boolean = false;
  message: string = '';

  constructor (private _apiService: ApiService) { }

  connect (username: string, password: string): void {

    const data = this._apiService.getData();

    if (data.username === username && data.password === password)
      this.auth = true;
  }

  disconnect (): void {
    this.auth = false;
  }

  isLoggedIn (): boolean {
    return this.auth;
  }
}
