import { Component, OnInit } from '@angular/core';
import { ProductionOrderModel } from 'src/app/models/production-order-model';
import { PRODCUTION_ORDERS } from '../../mock-data/data';

@Component({
  selector: 'esi-production-order-overview',
  templateUrl: './production-order-overview.component.html',
  styleUrls: ['./production-order-overview.component.scss']
})
export class ProductionOrderOverviewComponent implements OnInit {

  data: ProductionOrderModel[];

  displayedColumns: string[] = ['orderNumber', 'orderDate', 'deliveryDate', 'color', 'amount', 'itemPosition', 'productionStatusId'];

  endDate: Date;

  constructor() { }

  ngOnInit() {
    this.data = PRODCUTION_ORDERS;
    this.endDate = new Date();
  }

}
