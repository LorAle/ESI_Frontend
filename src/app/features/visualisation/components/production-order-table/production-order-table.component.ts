import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
