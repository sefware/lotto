import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatTooltipModule} from '@angular/material';

import {CovalentMediaModule,} from '@covalent/core';
import {TranslateService} from '../services/translate/translate.service';
import {TranslateModule} from '../services/translate/translate.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatTooltipModule,
  MatChipsModule
];

const COVALENT_MODULES: any[] = [
  CovalentMediaModule,
];

const ANGULAR_MODULES: any[] = [
  BrowserAnimationsModule,
  CommonModule,
];

@NgModule({
  imports: [
    ANGULAR_MODULES,
    COVALENT_MODULES,
    MATERIAL_MODULES,

    FlexLayoutModule,
    LazyLoadImageModule,

    TranslateModule
  ],
  exports: [
    // Shared Modules
    ANGULAR_MODULES,
    MATERIAL_MODULES,
    COVALENT_MODULES,

    FlexLayoutModule,
    LazyLoadImageModule,
    // Shared Components
    TranslateModule
  ],
  declarations: [],
  entryComponents: [],
  providers: [
    TranslateService
  ]
})
export class SharedModule {
}
