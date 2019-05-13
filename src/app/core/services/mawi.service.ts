import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MawiService {

  baseUrl: string;

  constructor(
    private _http: HttpClient
  ) {
    this.baseUrl = environment.baseUrl + '/mawi';
  }
  
  jsonHeader(){
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }
}
