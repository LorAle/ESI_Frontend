import { Component, OnInit } from '@angular/core';
import { ProductionOrderModel, ProductionStatusModel } from 'src/app/models';
import { PRODCUTION_ORDERS } from '../../mock-data/data';
import { ProductionService, VeveService } from 'src/app/core/services';
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
    private _prodService: ProductionService,
    private _veveService: VeveService
  ) { }

  ngOnInit() {
    this.status$ = this._prodService.getProductionStatus();
  }

  orderPlanning() {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 10)
    this.data = this._prodService.sortProductionOrders();
    this.data.subscribe(x => {
      x.forEach(order => {
        this._veveService.updateCustomerOrderStatusToProduction(order.CustomerOrderId).subscribe();
      })
    })
    // this.data = of(PRODCUTION_ORDERS);
  }

}
