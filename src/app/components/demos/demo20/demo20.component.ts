import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-demo20',
  standalone: true,
  imports: [],
  templateUrl: './demo20.component.html',
  styleUrl: './demo20.component.css'
})
export class Demo20Component {
  isConnected: boolean = false;

  constructor (private _AuthService: AuthService) { }

  ngOnInit (): void {
    // this.isConnected = this._AuthService.isConnected;
    this._AuthService.statusSubject$.subscribe({
      next: (data: boolean) => this.isConnected = data
    });
  }

  login () {
    this._AuthService.login();
    // this.isConnected = this._AuthService.isConnected;
  }

  logout () {
    this._AuthService.logout();
    // this.isConnected = this._AuthService.isConnected;
  }
}
