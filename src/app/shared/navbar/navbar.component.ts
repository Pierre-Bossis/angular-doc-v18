import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isConnected: boolean = false;
  isConnectedBehavior: boolean = false;

  // constructor (private _AuthService: AuthService) { }

  ngOnInit (): void {
    // // this.isConnected = this._AuthService.isConnected;
    // this._AuthService.statusSubject$.subscribe({
    //   next: (data: boolean) => this.isConnected = data
    // });

    // this._AuthService.statusBehaviorSubject$.subscribe({
    //   next: (data: boolean) => {
    //     this.isConnectedBehavior = data;
    //     console.log(this._AuthService.statusBehaviorSubject$.getValue());
    //   }
    // });

  }
}
