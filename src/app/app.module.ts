import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {L10nConfig, LocalizationModule, ProviderType, StorageStrategy} from 'angular-l10n';
import {SharedModule} from "./shared/shared.module";

const l10nConfig: L10nConfig = {
  locale: {
    languages: [
      {code: 'en', dir: 'ltr'},
      {code: 'th', dir: 'ltr'}
    ],
    defaultLocale: {languageCode: 'en', countryCode: 'US'},
    currency: 'USD',
    storage: StorageStrategy.Cookie,
    cookieExpiration: 30
  },
  translation: {
    providers: [
      {type: ProviderType.Static, prefix: './src/assets/locale-'}
    ],
    caching: true,
    composedKeySeparator: '.',
    missingValue: 'No key',
    i18nPlural: true
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,

    LocalizationModule.forRoot(l10nConfig)
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
