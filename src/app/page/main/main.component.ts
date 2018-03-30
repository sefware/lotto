import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Language, LocaleService} from 'angular-l10n';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Untils} from '../../shared/untils';
import {TdDialogService, TdLoadingService} from '@covalent/core';
import {InputModel} from '../../model/input.model';
import {StorageService} from '../../service/storage.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment.prod';
import {MatMenuTrigger} from '@angular/material';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Language() lang: string;
  @ViewChild('menu') trigger: MatMenuTrigger;

  isSmallScreen = false;
  isBigScreen = false;

  inputs: InputModel[] = [];

  types = Untils.types;
  selectedType = '1';

  calculate = Untils.calulate;

  constructor(public _storageService: StorageService,
              public _userService: AuthService,
              private _router: Router,
              private _locale: LocaleService,
              private _dialogService: TdDialogService,
              private _viewContainerRef: ViewContainerRef,
              private breakpointObserver: BreakpointObserver,
              private _loadingService: TdLoadingService) {
    breakpointObserver.observe(['(max-width: 750px)']).subscribe(result => {
      this.isSmallScreen = result.matches;
      // console.log('isSmallScreen : ' + this.isSmallScreen);
    });
    breakpointObserver.observe(['(min-width: 1050px)']).subscribe(result => {
      this.isBigScreen = result.matches;
      // console.log('isBigScreen : ' + this.isBigScreen);
    });
    // this._loadingService.register('main');
  }

  signOut() {
    this._userService.authentication.auth.signOut().then(s => {
      this._router.navigateByUrl('/login');
    });
  }

  someMethod() {
    this.trigger.openMenu();
  }

  async delay(milliseconds: number) {
    return new Promise<void>(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }

  async init() {
    await this.delay(200);
  }

  ngOnInit(): void {
    this.init().then(() => {
      this.load();
      // this._loadingService.resolve('main');
    });

  }

  load() {
    this.inputs = this._storageService.getListData();
    this.sort();
  }

  sort() {
    this.inputs.sort(function (name1, name2) {
      if (name1.time < name2.time) {
        return -1;
      } else if (name1.time > name2.time) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  openInput(_data: InputModel) {
    this._router.navigateByUrl('/data');
  }

  calculateList(selectedCal: string) {
    this._storageService.saveCalType(selectedCal);
    this._router.navigateByUrl('/result');
    // window.open('/result', '_blank');
  }

  deleteInput(data: InputModel) {
    this._storageService.removeData(data.time);
    this.inputs = this._storageService.getListData();
    this.sort();
  }

  selectLanguage(language: string): void {
    this._locale.setCurrentLanguage(language);
  }

  // @OnPageVisible() d
  // logWhenPageVisible(): void {
  //   console.log( 'OnPageVisible' );
  //   console.log( 'visible' );
  // }
  //
  // @OnPageHidden()
  // logWhenPageHidden(): void {
  //   console.log( 'OnPageHidden' );
  //   console.log( 'hidden' );
  // }
  //
  // @OnPageVisibilityChange()
  // logWhenPageVisibilityChange( isPageVisible: boolean ): void {
  //   console.log( 'OnPageVisibilityChange' );
  //   if ( isPageVisible ) {
  //     console.log( 'visible' );
  //   } else {
  //     console.log( 'hidden' );
  //   }
  // }
}
