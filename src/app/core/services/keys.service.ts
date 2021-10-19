import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class KeysService {
  public apiKey;

  constructor(private localStorage: LocalStorageService) {
  }

  getApiKey() {
    this.apiKey = this.localStorage.getApiKey();
  }

  issetKey() {
    if (this.apiKey) {
      return true;
    } else {
      return false;
    }
  }
}
