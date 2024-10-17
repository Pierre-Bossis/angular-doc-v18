import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from './services/fake-auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo12',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './demo12.component.html',
  styleUrl: './demo12.component.css'
})
export class Demo12Component implements OnInit{
  isConnected: boolean = false;

  username: string = '';
  password: string = '';

  message!: string;

  constructor (private _fakeAuthService: FakeAuthService) { }

  ngOnInit (): void {
    this.isConnected = this._fakeAuthService.isLoggedIn();
  }

  logIn (): void {
    this._fakeAuthService.connect(this.username, this.password);
    if (this.isConnected === this._fakeAuthService.isLoggedIn())
      this.message = "Identifiant ou mot de passe incorrect.";
    else {
      this.isConnected = this._fakeAuthService.isLoggedIn();
      this.message = '';
      this.username = '';
      this.password = '';
    }
  }

  logOut (): void {
    this._fakeAuthService.disconnect();
    this.isConnected = this._fakeAuthService.isLoggedIn();;
  }
}
