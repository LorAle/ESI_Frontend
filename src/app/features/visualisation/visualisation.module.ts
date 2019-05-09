import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualisationRoutingModule } from './visualisation-routing.module';
import { ProductionMonitoringComponent, ProductionOrderOverviewComponent } from './containers';

@NgModule({
  declarations: [
    ProductionMonitoringComponent,
    ProductionOrderOverviewComponent
  ],
  imports: [
    CommonModule,
    VisualisationRoutingModule
  ],
})
export class VisualisationModule { }
