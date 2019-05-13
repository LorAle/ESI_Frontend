import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PRODCUTION_ORDERS } from 'src/app/features/visualisation/mock-data/data';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  baseUrl: string;

  constructor(
    private _http: HttpClient
  ) {
    this.baseUrl = environment.baseUrl;
  }

  jsonHeader(){
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getProducts(): Observable<any[]> {
    return this._http.get<any[]>(this.baseUrl + `/prod`);
  }

  createProduct() {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post<any>(this.baseUrl + `/prod`, JSON.stringify(PRODCUTION_ORDERS[1]), {
      headers: this.jsonHeader()
    });
  }
}
