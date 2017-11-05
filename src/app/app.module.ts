import {BrowserModule} from '@angular/platform-browser';
import {APP_ID, CUSTOM_ELEMENTS_SCHEMA, Inject, NgModule, PLATFORM_ID} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {L10nConfig, LocalizationModule, ProviderType, StorageStrategy} from 'angular-l10n';
import {SharedModule} from './shared/shared.module';
import {isPlatformBrowser} from '@angular/common';

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
    BrowserModule.withServerTransition({appId: 'chaiwut-profile'}),
    AppRoutingModule,
    SharedModule,

    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule.enablePersistence(),
    // AngularFireAuthModule,

    // LocalizationModule.forRoot(l10nConfig)
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'on the server' : 'in the browser';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
