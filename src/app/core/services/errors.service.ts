import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ErrorsService {
  public showErrorMessage = (data) => {
    console.log(data);
  }
}

