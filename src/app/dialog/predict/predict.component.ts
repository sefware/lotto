import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Language} from 'angular-l10n';
import {ResultPredictModel} from '../../model/result_predict.model';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class PredictComponent {
  @Language() lang: string;
  datas: ResultPredictModel;

  constructor(@Inject(MAT_DIALOG_DATA) public mdData: ResultPredictModel) {
    this.datas = mdData;
  }
}
