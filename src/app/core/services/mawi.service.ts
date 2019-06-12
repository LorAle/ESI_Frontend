import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  jsonHeader() {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  supplyMaterial(type: string, amount: number): Observable<boolean> {
    return this._http.post<boolean>(this.baseUrl + `/order/supply?type=${type}&amount=${amount}`, {
      headers: this.jsonHeader()
    });
  }

  collectMaterial(data: { StockId: number, ProductionId: number, CustOrderId: number, Amount: number }): Observable<any> {
    return this._http.post<any>(this.baseUrl + `/order/collect`, JSON.stringify(data), {
      headers: this.jsonHeader()
    });
  }

  getQualityValues(stockId: number): Observable<any[]> {
    return this._http.get<any>(this.baseUrl + `/quality/${stockId}`);
  }

  getStocks(): Observable<any> {
    return this._http.get<any>(this.baseUrl + `/stock`);
  }
}
