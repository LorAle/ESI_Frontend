import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DispositionComponent } from './components';

const routes: Routes = [
  { path: 'disposition', component: DispositionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispositionRoutingModule { }