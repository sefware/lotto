import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {L10nConfig, L10nLoader, ProviderType, TranslationModule} from 'angular-l10n';
import {Untils} from '../shared/untils';
import {FullscreenOverlayContainer, OverlayContainer} from '@angular/cdk/overlay';

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
  providers: [
    {
      provide: OverlayContainer, useClass: FullscreenOverlayContainer
    }
  ]
})
export class ProfileModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();

  }
}
