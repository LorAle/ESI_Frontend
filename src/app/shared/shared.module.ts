
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatToolbarModule, MatSidenavModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
/* any other core modules */
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

const MATERIAL_MODULES= [
    MatButtonModule, MatCardModule, MatIconModule, MatListModule,
    MatToolbarModule, MatSidenavModule
]

const COVALENT_MODULES = [
  CovalentLayoutModule, CovalentStepsModule, CovalentHttpModule, CovalentHighlightModule,
  CovalentMarkdownModule, CovalentDynamicFormsModule
];

@NgModule({
  declarations: [
  ],
  imports: [
    MATERIAL_MODULES,
    COVALENT_MODULES,
    FlexLayoutModule
  ],
  exports: [
    MATERIAL_MODULES,
    COVALENT_MODULES,
    FlexLayoutModule
  ],
  providers: [

  ],
  bootstrap: [

  ]
})
export class SharedModule { }
