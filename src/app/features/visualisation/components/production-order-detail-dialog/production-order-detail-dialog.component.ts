import { Component, OnInit, Inject } from '@angular/core';
import { ProductionService } from 'src/app/core/services';
import { ProductionOrderModel } from 'src/app/models';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'esi-production-order-detail-dialog',
  templateUrl: './production-order-detail-dialog.component.html',
  styleUrls: ['./production-order-detail-dialog.component.scss']
})
export class ProductionOrderDetailDialogComponent implements OnInit {

  productionOrder$: Observable<ProductionOrderModel>;

  constructor(
    private _prodService: ProductionService,
    public dialogRef: MatDialogRef<ProductionOrderDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { orderId: number }
  ) { }

  ngOnInit() {
    this.productionOrder$ = this._prodService.getProductionOrder(this.data.orderId);
  }

  close(){
    this.dialogRef.close();
  }

}
