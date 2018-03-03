import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Language, LocaleService} from 'angular-l10n';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Untils} from '../shared/untils';
import {TdDialogService} from '@covalent/core';
import {InputModel} from '../model/input.model';
import {InputService} from '../service/input.service';
import {MatDialog} from '@angular/material';
import {InputDialogComponent} from '../dialog/input/input_dialog.component';
import {ResultDialogComponent} from '../dialog/result/result_dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Language() lang: string;

  isSmallScreen = false;
  isBigScreen = false;

  inputs: InputModel[];

  types = Untils.types;
  selectedType = '1';

  calculate = Untils.calulate;

  constructor(public _inputService: InputService,
              private _locale: LocaleService,
              private _dialogService: TdDialogService,
              private _viewContainerRef: ViewContainerRef,
              private breakpointObserver: BreakpointObserver,
              private _dialog: MatDialog) {
    breakpointObserver.observe(['(max-width: 750px)']).subscribe(result => {
      this.isSmallScreen = result.matches;
      console.log('isSmallScreen : ' + this.isSmallScreen);
    });
    breakpointObserver.observe(['(min-width: 1050px)']).subscribe(result => {
      this.isBigScreen = result.matches;
      console.log('isBigScreen : ' + this.isBigScreen);
    });
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this._inputService.loadData().subscribe((lists: InputModel[]) => {
        this.inputs = [];
        lists.forEach((data: InputModel) => {
          this.inputs.push(data);
        });
      }
    );
  }

  openInput(_data: InputModel) {
    console.log('this.inputs.length : ' + this.inputs.length);
    this._dialog.open(InputDialogComponent, {
      disableClose: true,
      width: '100%',
      height: '100%',
      data: {
        input: _data,
        inputs: this.inputs
      }
    });
  }

  calculateList(selectedCal: string) {

    if (this.inputs.length > 0) {
      this._dialog.open(ResultDialogComponent, {
        disableClose: true,
        width: '100%',
        height: '100%',
        data: {
          inputs: this.inputs,
          calType: selectedCal
        }
      });
    }

  }

  clearInput() {
    this.inputs.forEach((data: InputModel) => {
      this.deleteInput(data);
    });
  }

  deleteInput(data: InputModel) {
    this._inputService.removeData(data);
  }

  selectLanguage(language: string): void {
    this._locale.setCurrentLanguage(language);
  }

}
