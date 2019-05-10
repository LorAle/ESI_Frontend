import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionMonitoringComponent, ProductionOrderOverviewComponent } from './containers';

const routes: Routes = [
  { path: 'monitoring', component: ProductionMonitoringComponent },
  { path: 'orders', component: ProductionOrderOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualisationRoutingModule { }
