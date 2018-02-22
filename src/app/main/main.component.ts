import {Component, OnInit} from '@angular/core';
import {Language, LocaleService} from 'angular-l10n';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Untils} from '../shared/untils';
import {MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ]
})
export class MainComponent implements OnInit {

  @Language() lang: string;

  isSmallScreen = false;
  isBigScreen = false;

  selectedType = '1';
  selectedCal = '1';

  c_1: string;

  t_1: string;
  t_2: string;
  t_3: string;
  t_4: string;
  t_5: string;
  t_6: string;
  t_7: string;
  t_8: string;
  t_9: string;
  t_10: string;

  u_1: string;
  u_2: string;
  u_3: string;
  u_4: string;
  u_5: string;
  u_6: string;
  u_7: string;
  u_8: string;
  u_9: string;
  u_10: string;

  types = [
    {value: '1', viewValue: 'แบบกรอกผล' , enable: true},
    {value: '2', viewValue: 'ผลหอย' , enable: false},
    {value: '3', viewValue: 'ผลหมู' , enable: false},
    {value: '4', viewValue: 'ผลหมี' , enable: false},
    {value: '5', viewValue: 'ผลโชค' , enable: false},
    {value: '6', viewValue: 'ผลเจต' , enable: false},
    {value: '7', viewValue: 'ผลแพ' , enable: false},
    {value: '8', viewValue: 'ผลแมน' , enable: false}
  ];

  calulate = [
    {value: '1', viewValue: 'เสียวตัวเดียว' , enable: true},
    {value: '2', viewValue: 'ปักสิบบน' , enable: false},
    {value: '3', viewValue: 'ปักหน่วยบน' , enable: false},
    {value: '4', viewValue: 'ปักสิบล่าง' , enable: false},
    {value: '5', viewValue: 'ปักหน่วยล่าง' , enable: false},
    {value: '6', viewValue: 'รูดบน' , enable: false},
    {value: '7', viewValue: 'รูดล่าง' , enable: false},
    {value: '8', viewValue: 'เลขวินบน เรียงเลข' , enable: false}
  ];

  formulars = [
    {value: '1', operate: '+', formular: '0' },
    {value: '2', operate: '+', formular: '1' },
    {value: '3', operate: '+', formular: '2' },
    {value: '4', operate: '+', formular: '3' },
    {value: '5', operate: '+', formular: '4' },
    {value: '6', operate: '+', formular: '5' },
    {value: '7', operate: '+', formular: '6' },
    {value: '8', operate: '+', formular: '7' },
    {value: '9', operate: '+', formular: '8' },
    {value: '10', operate: '+', formular: '9' }
  ]

  constructor(private _locale: LocaleService,
              private breakpointObserver: BreakpointObserver) {
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
  }

  selectLanguage(language: string): void {
    this._locale.setCurrentLanguage(language);
  }

  print() {
    console.log(this.selectedType);
  }

  openSocailLink(type: string) {
    switch (type) {
      case 'cv':
        window.open(Untils.cv_download, '_blank');
        break;
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
