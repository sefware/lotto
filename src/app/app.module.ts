import {BrowserModule} from '@angular/platform-browser';
import {APP_ID, Inject, NgModule, PLATFORM_ID} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {L10nConfig, L10nLoader, ProviderType, TranslationModule} from 'angular-l10n';
import {SharedModule} from './shared/shared.module';
import {isPlatformBrowser} from '@angular/common';
import {Untils} from './shared/untils';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './service/auth.service';
import {LoginService} from './service/login.service';
import {AppService} from './service/app.service';
import {WebStorageModule} from 'ngx-store';
import {DataComponent} from './page/data/data.component';
import {ResultComponent} from './page/result/result.component';
import {MainComponent} from './page/main/main.component';
import {TextMaskModule} from 'angular2-text-mask';
import {StorageService} from './service/storage.service';
import {FormulaService} from './service/formula.service';
import {AngularPageVisibilityModule} from 'angular-page-visibility';
import {HttpClientModule} from '@angular/common/http';
import {BlockCopyPasteDirective} from './page/data/BlockCopyPasteDirective';


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
    DataComponent,
    ResultComponent,
    MainComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'herolotto-0.05'}),
    NoopAnimationsModule,
    TranslationModule.forRoot(l10nConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    WebStorageModule,
    AppRoutingModule,
    SharedModule,
    TextMaskModule,
    AngularPageVisibilityModule,
    HttpClientModule
  ],
  entryComponents: [
    DataComponent,
    ResultComponent,
    MainComponent
  ],
  providers: [
    AuthService,
    LoginService,
    AppService,
    StorageService,
    FormulaService
  ],
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
