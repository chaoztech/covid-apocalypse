import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppservicesService {
  constructor(private httpClient: HttpClient) { }

  public getData() {
    return this.httpClient.get('https://api.covid19india.org/data.json');
  }
  
}

