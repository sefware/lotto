import {Component, Inject} from '@angular/core';
import {Language} from 'angular-l10n';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {InputModel} from '../../model/input.model';
import {FormulaService} from '../../service/formula.service';
import {ResultModel} from '../../model/result.model';
import {Untils} from '../../shared/untils';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result_dialog.component.html',
  styleUrls: ['./result_dialog.component.scss']
})

export class ResultDialogComponent {
  @Language() lang: string;

  resultModel: ResultModel[];
  data: any;
  inputs: InputModel[];
  title: string;

  constructor(public service: FormulaService,
              public dialogRef: MatDialogRef<ResultDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public mdData: any) {
    this.data = this.mdData;

    this.inputs = this.data.inputs;

    this.inputs.forEach(s => {
      console.log('time ' + s.time);
    });

    this.resultModel = this.service.formulaCalculate(this.inputs, this.data.calType);
    this.title = Untils.getCalculateTitle(this.data.calType);
  }

  disable() {
    this.dialogRef.close();
  }

}
