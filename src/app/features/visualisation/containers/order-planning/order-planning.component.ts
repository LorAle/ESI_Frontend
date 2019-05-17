import { Component, OnInit } from '@angular/core';
import { ProductionOrderModel, ProductionStatusModel } from 'src/app/models';
import { PRODCUTION_ORDERS } from '../../mock-data/data';
import { ProductionService } from 'src/app/core/services';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'esi-order-planning',
  templateUrl: './order-planning.component.html',
  styleUrls: ['./order-planning.component.scss']
})
export class OrderPlanningComponent implements OnInit {

  data: Observable<ProductionOrderModel[]>;
  displayedColumns: string[] = ['CustomerOrderId', 'OrderDate', 'DeliveryDate', 'Color', 'Amount', 'OrderItem', 'OrderPosition', 'ProductionStatusId'];
  status$: Observable<ProductionStatusModel[]>;

  constructor(
    private _prodService: ProductionService
  ) { }

  ngOnInit() {
    this.status$ = this._prodService.getProductionStatus();
  }

  orderPlanning() {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 10)
    this.data = this._prodService.sortProductionOrders();
    // this.data = of(PRODCUTION_ORDERS);
  }

}
