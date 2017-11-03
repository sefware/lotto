import {Component} from '@angular/core';
import {fadeInAnimation} from './app.animations';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {TdMediaService} from '@covalent/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class AppComponent {
  title = 'app';

  constructor(public media: TdMediaService,
              iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('angular',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon_angular.svg'));
    iconRegistry.addSvgIcon('android',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon_android.svg'));
    iconRegistry.addSvgIcon('zk',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon_zk.svg'));
    iconRegistry.addSvgIcon('spring',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon_spring.svg'));

    iconRegistry.addSvgIcon('firebase',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon_firebase.svg'));
    iconRegistry.addSvgIcon('mssql',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon_mssql.svg'));
    iconRegistry.addSvgIcon('mysql',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon_mysql.svg'));
  }

}
