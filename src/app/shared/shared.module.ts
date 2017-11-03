import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {CommonModule} from '@angular/common';
import {CdkTableModule} from '@angular/cdk/table';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import {
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentDialogsModule,
  CovalentExpansionPanelModule,
  CovalentFileModule,
  CovalentJsonFormatterModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentMessageModule,
  CovalentNotificationsModule,
  CovalentPagingModule,
  CovalentSearchModule,
} from '@covalent/core';
import {TranslateService} from '../services/translate/translate.service';
import {TranslateModule} from '../services/translate/translate.module';
import {ConfirmComponent} from './dialog/confirm/confirm.component';

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatInputModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTabsModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressBarModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatRadioModule,
  MatAutocompleteModule,
];

const COVALENT_MODULES: any[] = [
  CovalentDataTableModule,
  CovalentMediaModule,
  CovalentLoadingModule,
  CovalentNotificationsModule,
  CovalentLayoutModule,
  CovalentMenuModule,
  CovalentPagingModule,
  CovalentSearchModule,
  CovalentCommonModule,
  CovalentDialogsModule,
  CovalentMessageModule,
  CovalentFileModule,
  CovalentJsonFormatterModule,
  CovalentExpansionPanelModule
];

const ANGULAR_MODULES: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
];

@NgModule({
  imports: [
    ANGULAR_MODULES,
    COVALENT_MODULES,
    MATERIAL_MODULES,

    CdkTableModule,
    FlexLayoutModule,
    LazyLoadImageModule,

    TranslateModule
  ],
  exports: [
    // Shared Modules
    ANGULAR_MODULES,
    MATERIAL_MODULES,
    COVALENT_MODULES,

    CdkTableModule,
    FlexLayoutModule,
    LazyLoadImageModule,
    // Shared Components
    TranslateModule
  ],
  declarations: [
    ConfirmComponent
  ],
  entryComponents: [
    ConfirmComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    TranslateService
  ]
})
export class SharedModule {
}
