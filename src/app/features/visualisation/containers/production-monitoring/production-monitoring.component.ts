import { Component, OnInit } from '@angular/core';
import { ProductionOrderModel, ProductionStatusModel } from 'src/app/models';
import { PRODCUTION_ORDERS } from '../../mock-data/data';
import { Observable } from 'rxjs';
import { ProductionService } from 'src/app/core/services';

@Component({
  selector: 'esi-production-monitoring',
  templateUrl: './production-monitoring.component.html',
  styleUrls: ['./production-monitoring.component.scss']
})
export class ProductionMonitoringComponent implements OnInit {

  data: ProductionOrderModel[];
  displayedColumns: string[] = ['customerOrderId', 'orderDate', 'deliveryDate', 'color', 'amount', 'orderItem', 'orderPosition', 'productionStatusId'];
  status$: Observable<ProductionStatusModel[]>;

  constructor(
    private _prodService: ProductionService
  ) { }

  ngOnInit() {
    const deliveryDate = new Date();
    this.data = PRODCUTION_ORDERS.filter(x => x.productionStatusId === 1);
  }

}
