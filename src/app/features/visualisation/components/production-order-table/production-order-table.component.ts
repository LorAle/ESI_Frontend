import { Component, OnInit, Input } from '@angular/core';
import { ProductionStatusModel } from 'src/app/models/production-status-model';

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

  constructor() { }

  ngOnInit() {
  }

}
