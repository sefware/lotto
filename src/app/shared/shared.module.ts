import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';

import {HttpClientModule} from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';

import {
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentNotificationsModule,
  CovalentDialogsModule,
  TdDialogService
} from '@covalent/core';
import {InputDialogComponent} from '../dialog/input/input_dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ResultDialogComponent} from '../dialog/result/result_dialog.component';
import {TextMaskModule} from 'angular2-text-mask';
import {ConfirmComponent} from '../dialog/confirm/confirm.component';
import {BrowserModule} from "@angular/platform-browser";

const MATERIAL_MODULES: any[] = [
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  BrowserModule,
];

const COVALENT_MODULES: any[] = [
  CovalentMediaModule,
  CovalentLayoutModule,
  CovalentNotificationsModule,
  CovalentLoadingModule,
  CovalentDialogsModule
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
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    TdDialogService
  ]
})
export class SharedModule {
}
