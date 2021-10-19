import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionService {

  constructor() {
  }

  tempConverter = (val: number, from: string, to: string) => {
    switch (from) {
      case 'K':
        return this.getTempFromK(val, to);
      default:
        return;
    }
  };

  getTempFromK(val: number, to: string) {
    switch (to) {
      case 'C':
        return val - 273.15;
      case 'F':
        return (val - 273.15) * 9 / 5 + 32;
      case 'K':
        return val;
      default:
        return;
    }
  }

  getChelyabinskCoord() {
    return {lng: 61.387, lat: 55.171};
  }
}
