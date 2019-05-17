import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductionStatusModel } from 'src/app/models/production-status-model';
import { ProductionOrderModel } from 'src/app/models';

@Component({
  selector: 'esi-production-order-table',
  templateUrl: './production-order-table.component.html',
  styleUrls: ['./production-order-table.component.scss']
})
export class ProductionOrderTableComponent implements OnInit {

  @Input('data')
  dataSource: any[];

  @Input('columns')
  displayedColumns: string[];

  @Input('status')
  orderStatus: ProductionStatusModel[];

  @Output('orderFinished')
  orderFinished = new EventEmitter<ProductionOrderModel>();

  constructor() { }

  ngOnInit() {
  }

  finished(order: ProductionOrderModel){
    this.orderFinished.emit(order);
  }

}
