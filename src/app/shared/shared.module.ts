
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Material Modules
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatToolbarModule, MatSidenavModule, MatTableModule, MatDatepickerModule,
  MatFormFieldModule, MatNativeDateModule, MatInputModule
} from '@angular/material';

//FlexLayout Modules
import { FlexLayoutModule } from '@angular/flex-layout';

// Covalent Modules imports
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule } from '@covalent/core/steps';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

// Covalent Echarts
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';

const MATERIAL_MODULES = [
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatToolbarModule, MatSidenavModule, MatTableModule, MatDatepickerModule,
  MatFormFieldModule, MatNativeDateModule, MatInputModule
]

const COVALENT_MODULES = [
  CovalentLayoutModule, CovalentStepsModule, CovalentHttpModule, CovalentHighlightModule,
  CovalentMarkdownModule, CovalentDynamicFormsModule, CovalentBaseEchartsModule, CovalentLineEchartsModule,
  CovalentTooltipEchartsModule
];

@NgModule({
  declarations: [
  ],
  imports: [
    MATERIAL_MODULES,
    COVALENT_MODULES,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    MATERIAL_MODULES,
    COVALENT_MODULES,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [

  ]
})
export class SharedModule { }
