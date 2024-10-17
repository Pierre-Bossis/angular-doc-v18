import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private data = {
    username: 'admin',
    password: 'admin123'
  };

  getData () {
    return this.data;
  }
  
}
