import {BrowserModule} from '@angular/platform-browser';
import {APP_ID, Inject, NgModule, PLATFORM_ID} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {L10nConfig, L10nLoader, ProviderType, StorageStrategy, TranslationModule} from 'angular-l10n';
import {SharedModule} from './shared/shared.module';
import {isPlatformBrowser} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

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
      {type: ProviderType.Static, prefix: './src/assets/locale/app-'}
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
    HttpClientModule,
    TranslationModule.forRoot(l10nConfig),

    AppRoutingModule,
    SharedModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              @Inject(APP_ID) private appId: string,
              public l10nLoader: L10nLoader) {
    this.l10nLoader.load();

    const platform = isPlatformBrowser(platformId) ?
      'on the server' : 'in the browser';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
