import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  setApiKey(key) {
    localStorage.setItem('key', key);
  }

  getApiKey() {
    return localStorage.getItem('key');
  }

  removeApiKey() {
    localStorage.removeItem('key');
  }
}
