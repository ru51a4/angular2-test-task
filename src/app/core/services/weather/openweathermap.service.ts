import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { ErrorsService } from '../errors.service';
import { Observable, Subject, throwError } from 'rxjs';
import { KeysService } from '../keys.service';
import { currentWeatherInterface, listWeatherInterface } from '../../interfaces/openweathermap.interace';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {

  constructor(private api: ApiService, private error: ErrorsService, private keys: KeysService) {

  }

  public openWeatherMapApiUrl = 'https://api.openweathermap.org/data/2.5/';

  getCurrentWeather(lng, lat): Observable<currentWeatherInterface> {
    return this.api.get(`weather?lat=${lat}&lon=${lng}&appid=${this.keys.apiKey}`, this.openWeatherMapApiUrl);
  }

  getWeather(): Observable<listWeatherInterface> {
    return this.api.get(`forecast?q=Chelyabinsk&appid=${this.keys.apiKey}`, this.openWeatherMapApiUrl);
  }

  getWeatherByGeo(lng: number, lat: number): Observable<listWeatherInterface> {
    return this.api.get(`forecast?lat=${lat}&lon=${lng}&appid=${this.keys.apiKey}`, this.openWeatherMapApiUrl);
  }

  checkApiKey(key: string): Subject<any> {
    const check$ = new Subject();
    this.api.get(`forecast?q=Chelyabinsk&appid=${key}`, this.openWeatherMapApiUrl).pipe(
      catchError((err) => {
        check$.next(false);
        return throwError(err);
      })).subscribe(() => {
      check$.next(true);
    });
    return check$;
  }
}
