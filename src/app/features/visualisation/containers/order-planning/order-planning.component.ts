import { Component, OnInit } from '@angular/core';
import { ProductionOrderModel } from 'src/app/models/production-order-model';
import { PRODCUTION_ORDERS } from '../../mock-data/data';

@Component({
  selector: 'esi-order-planning',
  templateUrl: './order-planning.component.html',
  styleUrls: ['./order-planning.component.scss']
})
export class OrderPlanningComponent implements OnInit {

  data: ProductionOrderModel[];
  displayedColumns: string[] = ['orderNumber', 'orderDate', 'deliveryDate', 'color', 'amount', 'itemPosition', 'productionStatusId'];

  constructor() { }

  ngOnInit() {

  }

  orderPlanning() {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 10)
    this.data = PRODCUTION_ORDERS;
  }

}
