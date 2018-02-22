import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';

import {
  MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule,
  MatTooltipModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';

import {CovalentLayoutModule, CovalentMediaModule} from '@covalent/core';

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatTooltipModule,
  MatChipsModule,
  LayoutModule
];

const COVALENT_MODULES: any[] = [
  CovalentMediaModule,
  CovalentLayoutModule
];

const ANGULAR_MODULES: any[] = [
  CommonModule,
  HttpClientModule
];

@NgModule({
  imports: [
    ANGULAR_MODULES,
    COVALENT_MODULES,
    MATERIAL_MODULES,

    FlexLayoutModule,
  ],
  exports: [
    // Shared Modules
    ANGULAR_MODULES,
    MATERIAL_MODULES,
    COVALENT_MODULES,

    FlexLayoutModule,
  ],
  declarations: [],
  entryComponents: [],
  providers: []
})
export class SharedModule {
}
