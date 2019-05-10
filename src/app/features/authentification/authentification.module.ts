import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { CoreModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfileComponent } from './containers';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AuthentificationRoutingModule
  ]
})
export class AuthentificationModule { }
