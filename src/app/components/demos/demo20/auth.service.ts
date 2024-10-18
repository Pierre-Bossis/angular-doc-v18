import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // • Subject
  isConnected: boolean = false;
  statusSubject$: Subject<boolean> = new Subject<boolean>();

  // • BehaviorSubject
  // private isConnected: boolean = false;
  statusBehaviorSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnected);

  constructor () { }

  login (): void {
    this.isConnected = true;
    this.statusSubject$.next(this.isConnected);
    this.statusBehaviorSubject$.next(this.isConnected);
  }

  logout (): void {
    this.isConnected = false;
    this.statusSubject$.next(this.isConnected);
    this.statusBehaviorSubject$.next(this.isConnected);
  }
}
