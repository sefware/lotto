import {Component} from '@angular/core';
import {fadeInAnimation} from './app.animations';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {TdMediaService} from '@covalent/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public media: TdMediaService) {

  }

}
