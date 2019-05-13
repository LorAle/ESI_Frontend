import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VeveService {

  baseUrl: string;

  constructor(
    private _http: HttpClient
  ) {
    this.baseUrl = environment.baseUrl + '/veve';
  }

  jsonHeader(){
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }
}
