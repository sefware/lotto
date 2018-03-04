import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ResultRouting} from './result.routing';
import {StorageService} from '../../service/storage.service';
import {FullscreenOverlayContainer, OverlayContainer} from '@angular/cdk/overlay';
import {L10nConfig, L10nLoader, ProviderType, TranslationModule} from 'angular-l10n';
import {Untils} from '../../shared/untils';
import {ResultComponent} from './result.component';
import {FormulaService} from '../../service/formula.service';

const l10nConfig: L10nConfig = {
  locale: Untils.locale,
  translation: {
    providers: [
      {type: ProviderType.Static, prefix: './assets/locale/app-'}
    ],
    caching: true,
    composedKeySeparator: '.',
    missingValue: '',
    i18nPlural: true
  }
};

@NgModule({
  imports: [
    ResultRouting,
    SharedModule,
    TranslationModule.forChild(l10nConfig),
  ],
  declarations: [
    ResultComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  entryComponents: [],
  providers: [
    {
      provide: OverlayContainer, useClass: FullscreenOverlayContainer
    },
    StorageService,
    FormulaService
  ]
})

export class ResultModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
}
