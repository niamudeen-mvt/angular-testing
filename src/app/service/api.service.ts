import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  isLoggedIn: any;
  constructor(private _http: HttpClient) {}

  BASE_URL: string = 'http://localhost:7000/api/v1/';

  public get(endpoint: string) {
    return this._http.get(`${this.BASE_URL}${endpoint}`);
  }

  public post(endpoint: string, data: any) {
    return this._http.post(`${this.BASE_URL}${endpoint}`, data);
  }
}
