import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionMonitoringComponent, ProductionOrderOverviewComponent, OrderPlanningComponent } from './containers';

const routes: Routes = [
  { path: 'monitoring', component: ProductionMonitoringComponent },
  { path: 'orders', component: ProductionOrderOverviewComponent },
  { path: 'plan', component: OrderPlanningComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualisationRoutingModule { }
