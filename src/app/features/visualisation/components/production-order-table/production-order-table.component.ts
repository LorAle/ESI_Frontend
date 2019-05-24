import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductionStatusModel } from 'src/app/models/production-status-model';
import { ProductionOrderModel } from 'src/app/models';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ProductionOrderDetailDialogComponent } from '../production-order-detail-dialog/production-order-detail-dialog.component';

@Component({
  selector: 'esi-production-order-table',
  templateUrl: './production-order-table.component.html',
  styleUrls: ['./production-order-table.component.scss']
})
export class ProductionOrderTableComponent implements OnInit {

  @Input('data')
  set data(value: ProductionOrderModel[]) {
    this.dataSource = new MatTableDataSource<ProductionOrderModel>(value);
  }

  @Input('columns')
  displayedColumns: string[];

  @Input('status')
  orderStatus: ProductionStatusModel[];

  @Input('showAll')
  showAll = false;

  @Input('filter')
  set filter(val: string) {
    this.applyFilter(val);
  }

  @Output('orderFinished')
  orderFinished = new EventEmitter<ProductionOrderModel>();

  dataSource: MatTableDataSource<ProductionOrderModel>;

  constructor(
    private _dialogRef: MatDialog
  ) { }

  ngOnInit() {

  }

  finished(order: ProductionOrderModel) {
    this.orderFinished.emit(order);
  }

  openInformationDialog(element: ProductionOrderModel) {
    let dialogRef = this._dialogRef.open(ProductionOrderDetailDialogComponent, {
      height: '70%',
      width: '70%',
      data: {
        orderId: element.Id
      }
    });
  }

  applyFilter(value: string) {
    console.log('Value:' + value)
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
