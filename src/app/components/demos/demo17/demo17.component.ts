import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-demo17',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './demo17.component.html',
  styleUrl: './demo17.component.css'
})
export class Demo17Component {
  isConnected: boolean = false;

  constructor (private _loginService: LoginService) { }

  ngOnInit (): void {
    this.isConnected = this._loginService.isConnected;
  }

  login (): void {
    this._loginService.logIn();
    this.isConnected = this._loginService.isConnected;
  }

  logout (): void {
    this._loginService.logOut();
    this.isConnected = this._loginService.isConnected;
  }
}
