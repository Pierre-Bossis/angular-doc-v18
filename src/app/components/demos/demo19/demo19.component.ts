import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';
import { SessionStorageService } from './session-storage.service';

@Component({
  selector: 'app-demo19',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './demo19.component.html',
  styleUrl: './demo19.component.css'
})
export class Demo19Component {
  constructor (private localStorageService: LocalStorageService, private sessionStorageService: SessionStorageService) { }

  // LocalStorage

  usernameLocal: string = "";
  savedUsernameLocal: string = "";

  saveLocal () {
    this.localStorageService.setItem('usernameLocal', this.usernameLocal);
  }

  loadLocal () {
    this.savedUsernameLocal = this.localStorageService.getItem('usernameLocal');
  }

  removeLocal () {
    this.localStorageService.removeItem('usernameLocal');
  }

  clearLocal () {
    this.localStorageService.clear();
  }

  // SessionStorage

  usernameSession: string = "";
  savedUsernameSession: string = "";

  saveSession () {
    this.sessionStorageService.setItem('usernameSession', this.usernameSession);
  }

  loadSession () {
    this.savedUsernameSession = this.sessionStorageService.getItem('usernameSession');
  }

  removeSession () {
    this.sessionStorageService.removeItem('usernameSession');
  }

  clearSession () {
    this.sessionStorageService.clear();
  }
}
