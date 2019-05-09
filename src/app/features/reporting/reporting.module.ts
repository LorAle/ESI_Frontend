import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingRoutingModule } from './reporting-routing.module';
import { KeyFiguresComponent } from './containers';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    KeyFiguresComponent
  ],
  imports: [
    CommonModule,
    ReportingRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class ReportingModule { }
