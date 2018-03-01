import {Component, Inject} from '@angular/core';
import {Language} from 'angular-l10n';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {InputModel} from '../../model/input.model';
import {FormulaService} from '../../service/formula.service';
import {ResultModel} from '../../model/result.model';

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

  constructor(public service: FormulaService,
              public dialogRef: MatDialogRef<ResultDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public mdData: any) {
    this.data = this.mdData;

    this.inputs = this.data.inputs;

    this.inputs.forEach(s => {
      console.log('time ' + s.time);
    });

    this.resultModel = this.service.formulaCalculate(this.inputs);
  }


  disable() {
    this.dialogRef.close();
  }

}
