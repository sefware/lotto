import {Component, OnInit} from '@angular/core';
import {TdMediaService} from '@covalent/core';
import {Language, LocaleService, TranslationService} from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Language() lang: string;

  constructor(public media: TdMediaService,
              private _locale: LocaleService,
              private _translate: TranslationService) {
  }

  ngOnInit(): void {
    this._translate.translationChanged().subscribe(
      () => {
        console.log('getCurrentLanguage : ' + this._locale.getCurrentLanguage());
      }
    );
  }

  selectLanguage(language: string): void {
    this._locale.setCurrentLanguage(language);
    console.log('selectLanguage : ' + this._locale.getCurrentLanguage());
  }

}
