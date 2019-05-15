import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispositionRoutingModule } from './disposition-routing.module';
import { DispositionComponent } from './components/disposition/disposition.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { OrderComponent } from './containers/order/order.component';
import { StorageComponent } from './containers/storage/storage.component';

@NgModule({
  declarations: [DispositionComponent, OrderComponent, StorageComponent],
  imports: [
    DispositionRoutingModule,
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class DispositionModule { }
