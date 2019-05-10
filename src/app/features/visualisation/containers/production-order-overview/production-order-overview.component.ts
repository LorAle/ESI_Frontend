import { Component, OnInit } from '@angular/core';
import { ProductionOrderModel } from 'src/app/models/production-order-model';

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
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 10)
    this.data = [
      {
        orderNumber: 'C-20170327-90125',
        customerOrderId: 1,
        orderDate: new Date(),
        deliveryDate: deliveryDate,
        materialId: 1,
        color: 'blue',
        motivId: 1,
        amount: 2,
        itemPostition: 1,
        sequencePostition: 1,
        productionStatusId: 2
      },
    ];
    this.endDate = new Date();
  }

}
