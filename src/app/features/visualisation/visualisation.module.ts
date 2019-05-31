import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualisationRoutingModule } from './visualisation-routing.module';
import { ProductionMonitoringComponent, ProductionOrderOverviewComponent, OrderPlanningComponent } from './containers';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { ProductionOrderTableComponent } from './components';
import { ProductionOrderDetailDialogComponent } from './components/production-order-detail-dialog/production-order-detail-dialog.component';

@NgModule({
  declarations: [
    ProductionMonitoringComponent,
    ProductionOrderOverviewComponent,
    ProductionOrderTableComponent,
    OrderPlanningComponent,
    ProductionOrderDetailDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    VisualisationRoutingModule,
  ],
  entryComponents: [
    ProductionOrderDetailDialogComponent
  ]
})
export class VisualisationModule { }
