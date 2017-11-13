import {BrowserModule} from '@angular/platform-browser';
import {APP_ID, Inject, NgModule, PLATFORM_ID} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {L10nConfig, L10nLoader, ProviderType, TranslationModule} from 'angular-l10n';
import {SharedModule} from './shared/shared.module';
import {isPlatformBrowser} from '@angular/common';
import {Untils} from './shared/untils';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
  }
;

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'chaiwut-profile'}),
    BrowserAnimationsModule,
    TranslationModule.forRoot(l10nConfig),
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              @Inject(APP_ID) private appId: string,
              public l10nLoader: L10nLoader) {
    this.l10nLoader.load();

    const platform = isPlatformBrowser(platformId) ?
      'on the server-firebase' : 'in the browser';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
