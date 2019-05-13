import { Component, OnInit } from '@angular/core';
import { ProductionOrderModel } from 'src/app/models/production-order-model';
import { PRODCUTION_ORDERS } from '../../mock-data/data';
import { ProductionService } from 'src/app/core/services';
import { Observable } from 'rxjs';
import { ProductionStatusModel } from 'src/app/models/production-status-model';

@Component({
  selector: 'esi-order-planning',
  templateUrl: './order-planning.component.html',
  styleUrls: ['./order-planning.component.scss']
})
export class OrderPlanningComponent implements OnInit {

  data: ProductionOrderModel[];
  displayedColumns: string[] = ['customerOrderId', 'orderDate', 'deliveryDate', 'color', 'amount', 'orderItem', 'orderPosition', 'productionStatusId'];
  status$: Observable<ProductionStatusModel[]>;

  constructor(
    private _prodService: ProductionService
  ) { }

  ngOnInit() {
    this.status$ = this._prodService.getProductionStatus();
  }

  orderPlanning() {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 10)
    this.data = PRODCUTION_ORDERS;
  }

}
