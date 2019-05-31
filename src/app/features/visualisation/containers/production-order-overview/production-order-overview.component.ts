import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ProductionOrderModel, ProductionStatusModel } from 'src/app/models';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { ProductionService } from 'src/app/core/services';
import * as XLSX from 'xlsx';

@Component({
  selector: 'esi-production-order-overview',
  templateUrl: './production-order-overview.component.html',
  styleUrls: ['./production-order-overview.component.scss']
})
export class ProductionOrderOverviewComponent implements OnInit {

  @ViewChild('TABLE', {read: ElementRef}) table: ElementRef;

  data: Observable<ProductionOrderModel[]>;
  displayedColumns: string[] = ['CustomerOrderId', 'OrderDate', 'DeliveryDate', 'Color', 'Amount', 'OrderItem', 'OrderPosition', 'ProductionStatusId', 'Actions'];
  endDate: Date;
  startDate: Date;
  status$: BehaviorSubject<ProductionStatusModel[]> = new BehaviorSubject<ProductionStatusModel[]>([]);
  showAll = false;
  filter$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private _prodService: ProductionService
  ) { }

  ngOnInit() {
    this.startDate = new Date();
    this.endDate = new Date();
    this._prodService.getProductionStatus().subscribe(x => {
      this.status$.next(x);
      console.log(x);
    });
    // this.data = of(PRODCUTION_ORDERS);
    this.data = this._prodService.getProductionOrders();
    this._prodService.getProductionOrders().subscribe(x => console.log(x));
    this.endDate = new Date();
  }

  exportAsExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Maschinenkonfiguration');

    console.log(ws);
    ws['!cols'][8] = { hidden: true };

    /* save to file */
    XLSX.writeFile(wb, 'Maschinenkonfiguration.xlsx');

  }

  applyFilter(value: string){
    this.filter$.next(value);
  }

}
