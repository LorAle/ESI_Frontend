import { Component, OnInit } from '@angular/core';
import { ProductionOrderModel, ProductionStatusModel, ProductionOrderFormModel } from 'src/app/models';
import { PRODCUTION_ORDERS } from '../../mock-data/data';
import { Observable, of } from 'rxjs';
import { ProductionService, VeveService } from 'src/app/core/services';
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
    private _prodService: ProductionService,
    private _veveService: VeveService
  ) { }

  ngOnInit() {
    this.data = this._prodService.getProductionOrders(2);
  }

  finished(order: ProductionOrderModel){
    this._prodService.updateProductionOrder(order.Id, <ProductionOrderFormModel>{...order, ProductionStatusId: 3}).subscribe(x => this.ngOnInit());
    this._veveService.updateCustomerOrderStatus(order.CustomerOrderId).subscribe();
  }

}
