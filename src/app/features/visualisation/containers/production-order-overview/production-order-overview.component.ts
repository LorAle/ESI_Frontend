import { Component, OnInit } from '@angular/core';
import { ProductionOrderModel, ProductionStatusModel } from 'src/app/models';
import { PRODCUTION_ORDERS } from '../../mock-data/data';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { ProductionService } from 'src/app/core/services';

@Component({
  selector: 'esi-production-order-overview',
  templateUrl: './production-order-overview.component.html',
  styleUrls: ['./production-order-overview.component.scss']
})
export class ProductionOrderOverviewComponent implements OnInit {

  data: Observable<ProductionOrderModel[]>;
  displayedColumns: string[] = ['CustomerOrderId', 'OrderDate', 'DeliveryDate', 'Color', 'Amount', 'OrderItem', 'OrderPosition', 'ProductionStatusId'];
  endDate: Date;
  status$: BehaviorSubject<ProductionStatusModel[]> = new BehaviorSubject<ProductionStatusModel[]>([]);

  constructor(
    private _prodService: ProductionService
  ) { }

  ngOnInit() {

    this._prodService.getProductionStatus().subscribe(x => {
      this.status$.next(x);
      console.log(x);
    });
    // this.data = of(PRODCUTION_ORDERS);
    this.data = this._prodService.getProductionOrders();
    this._prodService.getProductionOrders().subscribe(x => console.log(x));
    this.endDate = new Date();
  }

}
