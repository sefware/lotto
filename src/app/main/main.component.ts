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
  selectedCal = '1';

  formulars = [
    {value: '1', operate: '+', formular: '0'},
    {value: '2', operate: '+', formular: '1'},
    {value: '3', operate: '+', formular: '2'},
    {value: '4', operate: '+', formular: '3'},
    {value: '5', operate: '+', formular: '4'},
    {value: '6', operate: '+', formular: '5'},
    {value: '7', operate: '+', formular: '6'},
    {value: '8', operate: '+', formular: '7'},
    {value: '9', operate: '+', formular: '8'},
    {value: '10', operate: '+', formular: '9'}
  ];

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
    console.log(this.formulars[0]);
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

  addInput() {
    const dialogRef = this._dialog.open(InputDialogComponent, {
      disableClose: true,
      width: 'auto',
      height: 'auto',
      data: {
        mode: 'add',
        time: (this.inputs.length == undefined ? 0 : this.inputs.length) + 1,
        up: 1,
        low: 1
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const newData = <InputModel>{
          time: result.time,
          up: result.up,
          low: result.low
        };
        this._inputService.addData(newData);
      }
    });
  }

  editInput(data: InputModel) {

    const dialogRef = this._dialog.open(InputDialogComponent, {
      disableClose: true,
      width: 'auto',
      height: 'auto',
      data: {
        mode: 'edit',
        time: data.time,
        up: data.up,
        low: data.low
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const editData = <InputModel>{
          time: result.time,
          up: result.up,
          low: result.low,
          id: data.id
        };
        this._inputService.updateData(editData);
      }
    });
  }

  calculateList() {

    if (this.inputs.length > 0) {
      this._dialog.open(ResultDialogComponent, {
        disableClose: true,
        width: '100%',
        height: '100%',
        data: {
          inputs: this.inputs
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

  print() {
    console.log(this.selectedType);
  }

  openLink(type: string) {
    switch (type) {
      case 'github':
        window.open('https://github.com/chaiwutmaneechot', '_blank');
        break;
      case 'github_profile':
        window.open('https://github.com/chaiwutmaneechot/profile', '_blank');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/chaiwut.maneechot', '_blank');
        break;
      case 'twitter':
        window.open('https://twitter.com/chaiwut_maneech', '_blank');
        break;
      case 'trello':
        window.open('https://trello.com/chaiwutmaneechot1', '_blank');
        break;
      case 'youtube':
        window.open('https://www.youtube.com/channel/UCokOLO_r8BlaDfoB3CASTvw?view_as=subscriber', '_blank');
        break;
      default:
        break;
    }
  }
}
