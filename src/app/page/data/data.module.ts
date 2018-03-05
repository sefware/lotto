import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {DataComponent} from './data.component';
import {DataRouting} from './data.routing';
import {StorageService} from '../../service/storage.service';
import {L10nConfig, L10nLoader, ProviderType, TranslationModule} from 'angular-l10n';
import {Untils} from '../../shared/untils';
import {TextMaskModule} from 'angular2-text-mask';
import {FormsModule} from '@angular/forms';

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
    FormsModule,
    TextMaskModule,
    TranslationModule.forChild(l10nConfig),
  ],
  declarations: [
    DataComponent,
  ],
  entryComponents: [],
  providers: [
    StorageService
  ]
})

export class DataModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();

  }
}
