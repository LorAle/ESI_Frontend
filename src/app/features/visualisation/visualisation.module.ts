import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualisationRoutingModule } from './visualisation-routing.module';
import { ProductionMonitoringComponent, ProductionOrderOverviewComponent } from './containers';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    ProductionMonitoringComponent,
    ProductionOrderOverviewComponent
  ],
  imports: [
    CommonModule,
    VisualisationRoutingModule,
    SharedModule,
    CoreModule
  ],
})
export class VisualisationModule { }
