import { Component, OnInit } from '@angular/core';
import { ProductionOrderModel } from 'src/app/models/production-order-model';
import { PRODCUTION_ORDERS } from '../../mock-data/data';
import { Observable } from 'rxjs';
import { ProductionStatusModel } from 'src/app/models/production-status-model';
import { ProductionService } from 'src/app/core/services';

@Component({
  selector: 'esi-production-order-overview',
  templateUrl: './production-order-overview.component.html',
  styleUrls: ['./production-order-overview.component.scss']
})
export class ProductionOrderOverviewComponent implements OnInit {

  data: ProductionOrderModel[];
  displayedColumns: string[] = ['customerOrderId', 'orderDate', 'deliveryDate', 'color', 'amount', 'orderItem', 'orderPosition', 'productionStatusId'];
  endDate: Date;
  status$: Observable<ProductionStatusModel[]>;

  constructor(
    private _prodService: ProductionService
  ) { }

  ngOnInit() {
    this.data = PRODCUTION_ORDERS;
    this.endDate = new Date();
  }

}
