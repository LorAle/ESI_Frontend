import { Component, OnInit } from '@angular/core';
import { ProductionOrderModel } from 'src/app/models/production-order-model';
import { PRODCUTION_ORDERS } from '../../mock-data/data';

@Component({
  selector: 'esi-production-monitoring',
  templateUrl: './production-monitoring.component.html',
  styleUrls: ['./production-monitoring.component.scss']
})
export class ProductionMonitoringComponent implements OnInit {

  data: ProductionOrderModel[];

  displayedColumns: string[] = ['orderNumber', 'orderDate', 'deliveryDate', 'color', 'amount', 'itemPosition', 'productionStatusId'];

  constructor() { }

  ngOnInit() {
    const deliveryDate = new Date();
    this.data = PRODCUTION_ORDERS.filter(x => x.productionStatusId === 1);
  }

}
