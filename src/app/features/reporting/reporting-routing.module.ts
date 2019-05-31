import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyFiguresComponent } from './containers';

const routes: Routes = [
  { path: 'keyfigures', component: KeyFiguresComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule { }
