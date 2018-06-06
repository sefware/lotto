"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var flex_layout_1 = require("@angular/flex-layout");
var ng_lazyload_image_1 = require("ng-lazyload-image");
var common_1 = require("@angular/common");
var table_1 = require("@angular/cdk/table");
var logs_service_1 = require("../services/logs.service");
var material_1 = require("@angular/material");
var core_2 = require("@covalent/core");
var MATERIAL_MODULES = [
    material_1.MatButtonModule,
    material_1.MatCardModule,
    material_1.MatIconModule,
    material_1.MatListModule,
    material_1.MatMenuModule,
    material_1.MatTooltipModule,
    material_1.MatSlideToggleModule,
    material_1.MatInputModule,
    material_1.MatCheckboxModule,
    material_1.MatToolbarModule,
    material_1.MatSnackBarModule,
    material_1.MatSidenavModule,
    material_1.MatTabsModule,
    material_1.MatSelectModule,
    material_1.MatDialogModule,
    material_1.MatProgressBarModule,
    material_1.MatChipsModule,
    material_1.MatDatepickerModule,
    material_1.MatNativeDateModule,
    material_1.MatPaginatorModule,
    material_1.MatRadioModule,
    material_1.MatAutocompleteModule,
];
var COVALENT_MODULES = [
    core_2.CovalentDataTableModule,
    core_2.CovalentMediaModule,
    core_2.CovalentLoadingModule,
    core_2.CovalentNotificationsModule,
    core_2.CovalentLayoutModule,
    core_2.CovalentMenuModule,
    core_2.CovalentPagingModule,
    core_2.CovalentSearchModule,
    core_2.CovalentCommonModule,
    core_2.CovalentDialogsModule,
    core_2.CovalentMessageModule,
    core_2.CovalentFileModule,
    core_2.CovalentJsonFormatterModule,
    core_2.CovalentExpansionPanelModule
];
var ANGULAR_MODULES = [
    common_1.CommonModule,
    forms_1.FormsModule,
    forms_1.ReactiveFormsModule,
    http_1.HttpModule,
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                ANGULAR_MODULES,
                COVALENT_MODULES,
                MATERIAL_MODULES,
                table_1.CdkTableModule,
                ngx_datatable_1.NgxDatatableModule,
                flex_layout_1.FlexLayoutModule,
                ng_lazyload_image_1.LazyLoadImageModule,
            ],
            exports: [
                // Shared Modules
                ANGULAR_MODULES,
                MATERIAL_MODULES,
                COVALENT_MODULES,
                table_1.CdkTableModule,
                ngx_datatable_1.NgxDatatableModule,
                flex_layout_1.FlexLayoutModule,
                ng_lazyload_image_1.LazyLoadImageModule,
            ],
            declarations: [],
            providers: [
                logs_service_1.LogsService
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map