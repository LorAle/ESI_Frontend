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

  supplyMaterial(data: { Typ: string, Menge: number }): Observable<any> {
    return this._http.post<any>(this.baseUrl + `/order/supply`, JSON.stringify(data), {
      headers: this.jsonHeader()
    });
  }

  collectMaterial(data: { Material: string, Menge: number, Fertigungsauftrag: number, Auftragsnummer: number }): Observable<any> {
    return this._http.post<any>(this.baseUrl + `/order/supply`, JSON.stringify(data), {
      headers: this.jsonHeader()
    });
  }
}
