import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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

  jsonHeader() {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  updateCustomerOrderStatus(orderId: number): Observable<any> {
    return this._http.put<any>(this.baseUrl + `/order/${orderId}/4`, {
      headers: this.jsonHeader()
    });
  }

  updateCustomerOrderStatusToProduction(orderId: number): Observable<any> {
    return this._http.put<any>(this.baseUrl + `/order/${orderId}/3`, {
      headers: this.jsonHeader()
    });
  }
}
