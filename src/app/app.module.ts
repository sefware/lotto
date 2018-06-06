import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {L10nConfig, L10nLoader, ProviderType, TranslationModule} from 'angular-l10n';
import {SharedModule} from './shared/shared.module';
import {Untils} from './shared/untils';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {HttpClientModule} from '@angular/common/http';
import {LongPressModule} from 'ngx-long-press/dist/src';
import {LoginComponent} from './page/login/login.component';
import {PredictComponent} from './dialog/predict/predict.component';
import {ResultTComponent} from './page/resultT/resultT.component';
import {FormulaTService} from './service/formulaT.service';
import {ResultT2Component} from './page/resultT2/resultT2.component';
import {FormulaT2Service} from './service/formulaT2.service';
import {ResultT3Component} from './page/resultT3/resultT3.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {ClipboardModule} from 'ngx-clipboard';
import {Result3rowDivComponent} from './page/result3rowDiv/result3rowDiv.component';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";


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
    ResultTComponent,
    ResultT2Component,
    ResultT3Component,
    Result3rowDivComponent,
    LoginComponent,
    MainComponent,
    PredictComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    TranslationModule.forRoot(l10nConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    WebStorageModule,
    AppRoutingModule,
    SharedModule,
    TextMaskModule,
    HttpClientModule,
    LongPressModule,
    InfiniteScrollModule,
    ClipboardModule,

  ],
  entryComponents: [
    DataComponent,
    ResultComponent,
    ResultTComponent,
    ResultT2Component,
    ResultT3Component,
    MainComponent,
    LoginComponent,
    PredictComponent,
  ],
  providers: [
    AuthService,
    LoginService,
    AppService,
    StorageService,
    FormulaService,
    FormulaTService,
    FormulaT2Service
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
}
