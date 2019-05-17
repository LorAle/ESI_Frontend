import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispositionRoutingModule } from './disposition-routing.module';
import { DispositionComponent } from './components';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { OrderComponent, StorageComponent } from './containers';

@NgModule({
  declarations: [
    DispositionComponent, OrderComponent, StorageComponent
  ],
  imports: [
    DispositionRoutingModule,
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class DispositionModule { }
