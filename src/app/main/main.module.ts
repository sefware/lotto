import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MainComponent} from './main.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {L10nConfig, L10nLoader, ProviderType, TranslationModule} from 'angular-l10n';
import {Untils} from '../shared/untils';
import {FullscreenOverlayContainer, OverlayContainer} from '@angular/cdk/overlay';
import {InputService} from '../service/input.service';
import '@firebase/firestore';
import {FormulaService} from '../service/formula.service';

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
    SharedModule,
    TranslationModule.forChild(l10nConfig),
    RouterModule.forChild([
      {path: '', component: MainComponent}
    ])
  ],
  declarations: [
    MainComponent
  ],
  entryComponents: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    {
      provide: OverlayContainer, useClass: FullscreenOverlayContainer
    },
    InputService,
    FormulaService
  ]
})
export class MainModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();

  }
}
