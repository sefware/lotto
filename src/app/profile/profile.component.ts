import {Component, OnInit} from '@angular/core';
import {Language, LocaleService} from 'angular-l10n';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  @Language() lang: string;

  isSmallScreen = false;
  isBigScreen = false;

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
  }

  selectLanguage(language: string): void {
    this._locale.setCurrentLanguage(language);
  }

  openSocailLink(type: string) {
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
