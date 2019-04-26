
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatToolbarModule, MatSidenavModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const MATERIAL_MODULES= [
    MatButtonModule, MatCardModule, MatIconModule, MatListModule,
    MatToolbarModule, MatSidenavModule
]

@NgModule({
  declarations: [
  ],
  imports: [
    MATERIAL_MODULES,
    FlexLayoutModule
  ],
  exports: [
    MATERIAL_MODULES,
    FlexLayoutModule
  ],
  providers: [

  ],
  bootstrap: [

  ]
})
export class SharedModule { }
