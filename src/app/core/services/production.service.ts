import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PRODCUTION_ORDERS } from 'src/app/features/visualisation/mock-data/data';
import { ProductionOrderModel, ProductionOrderFormModel } from 'src/app/models/production-order-model';
import { ProductionStatusModel } from 'src/app/models/production-status-model';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  baseUrl: string;

  constructor(
    private _http: HttpClient
  ) {
    this.baseUrl = environment.baseUrl + '/prod';
  }

  jsonHeader(){
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getProductionOrders(): Observable<ProductionOrderModel[]> {
    return this._http.get<ProductionOrderModel[]>(this.baseUrl);
  }

  createProductionOrder(data: ProductionOrderFormModel): Observable<ProductionOrderModel> {
    return this._http.post<ProductionOrderModel>(this.baseUrl, JSON.stringify(PRODCUTION_ORDERS[1]), {
      headers: this.jsonHeader()
    });
  }

  updateProductionOrder(orderId: number, data: ProductionOrderFormModel): Observable<boolean> {
    return this._http.put<boolean>(this.baseUrl + `${orderId}`, JSON.stringify(PRODCUTION_ORDERS[1]), {
      headers: this.jsonHeader()
    });
  }

  deleteProductionOrder(orderId: number): Observable<boolean> {
    return this._http.delete<boolean>(this.baseUrl + `${orderId}`);
  }

  getProductionStatus(): Observable<ProductionStatusModel[]>{
    return this._http.get<ProductionStatusModel[]>(this.baseUrl + `/status`);
  }

  sortProductionOrders(): Observable<ProductionOrderModel[]> {
    return this._http.put<ProductionOrderModel[]>(this.baseUrl + `/order`, {
      headers: this.jsonHeader()
    })
  }
}
