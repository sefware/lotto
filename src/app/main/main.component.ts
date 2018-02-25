import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Language, LocaleService} from 'angular-l10n';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Untils} from '../shared/untils';
import {TdDialogService} from '@covalent/core';
import {InputModel} from '../model/input.model';
import {InputService} from '../service/input.service';
import {MatDialog} from '@angular/material';
import {InputDialogComponent} from '../dialog/input/input_dialog.component';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Language() lang: string;

  isSmallScreen = false;
  isBigScreen = false;

  inputs: Observable<InputModel[]>;

  selectedType = '1';
  selectedCal = '1';

  c_1: string;

  t_1: string;

  u_1: string;

  types = Untils.types;

  calulate = Untils.calulate;

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
    this.c_1 = '8.15';
    this.t_1 = '000';
    this.u_1 = '00';

    this.load();
  }

  load() {
    this.inputs = this._inputService.loadData();

    // this.inputs.subscribe( (snapshort) => {
    //   console.log('snapshort is ' + snapshort.keys());
    // });
  }

  addInput() {
    const dialogRef = this._dialog.open(InputDialogComponent, {
      disableClose: true,
      width: 'auto',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const newData = <InputModel>{
          time: 'time',
          up: 'up',
          low: 'low'
        };
        this._inputService.addData(newData);
      }
    });
  }

  editInput(data: InputModel) {
    this._inputService.updateData(<InputModel>{
      time: 'time',
      up: 'up',
      low: 'low',

    });
  }

  clearInput() {
    this._inputService.lists.subscribe((data: InputModel[]) => {

      data.forEach((s: InputModel) => {
        this.deleteInput(s);
        console.log('ss ' + s.id);
      });
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

  openPrompt(): void {
    this.load();
    // this._dialogService.openPrompt({
    //   message: 'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
    //   disableClose: true,
    //   viewContainerRef: this._viewContainerRef,
    //   title: 'Prompt',
    //   value: 'Prepopulated value',
    //   cancelButton: 'ยกเลิก',
    //   acceptButton: 'เพิ่ม',
    //   width: '300px',
    // }).afterClosed().subscribe((newValue: string) => {
    //   if (newValue) {
    //     // DO SOMETHING
    //   } else {
    //     // DO SOMETHING ELSE
    //   }
    // });
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
