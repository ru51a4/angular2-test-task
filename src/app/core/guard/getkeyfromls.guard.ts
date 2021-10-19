import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { KeysService } from '../services/keys.service';

@Injectable({
  providedIn: 'root'
})
export class GetkeyfromlsGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService, private keys: KeysService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.localStorageService.getApiKey() !== null) {
      this.keys.getApiKey();
    }

    return true;
  }


}
