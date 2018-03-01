import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

import {HttpClientModule} from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';

import {CovalentLayoutModule, CovalentMediaModule, CovalentNotificationsModule, TdDialogService} from '@covalent/core';
import {CovalentDynamicFormsModule} from '@covalent/dynamic-forms';
import {InputDialogComponent} from '../dialog/input/input_dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ResultDialogComponent} from '../dialog/result/result_dialog.component';

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatTabsModule,
  MatMenuModule,
  MatInputModule,
  MatSelectModule,
  MatDividerModule,
  MatIconModule,
  MatTooltipModule,
  MatChipsModule,
  MatDialogModule,
  MatGridListModule
];

const COVALENT_MODULES: any[] = [
  CovalentMediaModule,
  CovalentLayoutModule,
  CovalentNotificationsModule,
  CovalentDynamicFormsModule
];

const ANGULAR_MODULES: any[] = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  LayoutModule
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
  declarations: [
    InputDialogComponent,
    ResultDialogComponent
  ],
  entryComponents: [
    InputDialogComponent,
    ResultDialogComponent
  ],
  providers: [
    TdDialogService
  ]
})
export class SharedModule {
}
