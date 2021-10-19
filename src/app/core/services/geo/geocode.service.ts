import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { geocodeInterface } from '../../interfaces/geocode.interface';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  constructor(private api: ApiService) {
  }

  public geoCodeApiUrl = 'https://geocode.xyz/';

  getCityNameByGeoCoord(lng, lat): Observable<geocodeInterface> {
    return this.api.get(`${lat},${lng}?geoit=json`, this.geoCodeApiUrl);
  }


}
