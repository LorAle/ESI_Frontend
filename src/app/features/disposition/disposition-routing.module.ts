import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DispositionComponent } from './components/disposition/disposition.component';
import { OrderComponent, StorageComponent } from './containers';

const routes: Routes = [
  { path: 'disposition', component: DispositionComponent },
  { path: 'order', component: OrderComponent },
  { path: 'storage', component: StorageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispositionRoutingModule { }