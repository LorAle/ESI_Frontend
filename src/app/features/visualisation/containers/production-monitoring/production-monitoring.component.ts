import { Component, OnInit } from '@angular/core';
import { ProductionOrderModel, ProductionStatusModel, ProductionOrderFormModel } from 'src/app/models';
import { PRODCUTION_ORDERS } from '../../mock-data/data';
import { Observable, of } from 'rxjs';
import { ProductionService } from 'src/app/core/services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'esi-production-monitoring',
  templateUrl: './production-monitoring.component.html',
  styleUrls: ['./production-monitoring.component.scss']
})
export class ProductionMonitoringComponent implements OnInit {

  data: Observable<ProductionOrderModel[]>;
  displayedColumns: string[] = ['CustomerOrderId', 'OrderDate', 'DeliveryDate', 'Color', 'Amount', 'OrderItem', 'OrderPosition', 'ProductionStatusId', 'Actions'];
  status$: Observable<ProductionStatusModel[]>;
  showAll = true;

  constructor(
    private _prodService: ProductionService
  ) { }

  ngOnInit() {
    // this.data = of(PRODCUTION_ORDERS.filter(x => x.ProductionStatusId === 1));
    this.data = this._prodService.getProductionOrders().pipe(
      map(x => x.filter(a => a.ProductionStatusId === 1))
    );
  }

  finished(order: ProductionOrderModel){
    order.ProductionStatusId = 2;
    this._prodService.updateProductionOrder(order.Id, <ProductionOrderFormModel>{...order}).subscribe();
    this.ngOnInit();
  }

}
