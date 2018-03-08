import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
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

import {
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentNotificationsModule,
  TdDialogService
} from '@covalent/core';
import {InputDialogComponent} from '../dialog/input/input_dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ResultDialogComponent} from '../dialog/result/result_dialog.component';
import {TextMaskModule} from 'angular2-text-mask';
import {ConfirmComponent} from '../dialog/confirm/confirm.component';

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
  MatDialogModule,
  MatFormFieldModule
];

const COVALENT_MODULES: any[] = [
  CovalentMediaModule,
  CovalentLayoutModule,
  CovalentNotificationsModule,
  CovalentLoadingModule
];

const ANGULAR_MODULES: any[] = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  LayoutModule,
  MatGridListModule,
  FormsModule
];

@NgModule({
  imports: [
    ANGULAR_MODULES,
    COVALENT_MODULES,
    MATERIAL_MODULES,

    FlexLayoutModule,
    TextMaskModule
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
    ResultDialogComponent,
    ConfirmComponent
  ],
  entryComponents: [
    InputDialogComponent,
    ResultDialogComponent,
    ConfirmComponent
  ],
  providers: [
    TdDialogService
  ]
})
export class SharedModule {
}
