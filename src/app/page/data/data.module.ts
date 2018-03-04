import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {DataComponent} from './data.component';
import {DataRouting} from './data.routing';
import {StorageService} from '../../service/storage.service';
import {FullscreenOverlayContainer, OverlayContainer} from '@angular/cdk/overlay';
import {L10nConfig, L10nLoader, ProviderType, TranslationModule} from 'angular-l10n';
import {Untils} from '../../shared/untils';
import {TextMaskModule} from 'angular2-text-mask';

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
    DataRouting,
    SharedModule,
    TextMaskModule,
    TranslationModule.forChild(l10nConfig),
  ],
  declarations: [
    DataComponent,
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
    StorageService
  ]
})

export class DataModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();

  }
}
